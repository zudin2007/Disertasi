#!/usr/bin/env node
/*
 * Reproducible dissertation build.
 *
 *   node build/build.js            -> Dissertation_Full.pdf + Dissertation_Full.docx
 *   node build/build.js --only=pdf
 *   node build/build.js --only=docx
 *
 * Canonical source: the Markdown files listed in build/manifest.json (in order).
 * The compiled PDF/DOCX are generated artifacts — never hand-edit them; edit the
 * Markdown (prose) or the manifest (structure) instead.
 *
 * Toolchain (pinned in package.json): markdown-it (Markdown -> HTML),
 * markdown-it-anchor (stable heading IDs for the TOC), Puppeteer/Chromium
 * (HTML -> PDF), html-to-docx (HTML -> DOCX), pdf-lib (page count for evidence).
 */

'use strict';

const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');
const anchor = require('markdown-it-anchor');

const ROOT = path.resolve(__dirname, '..');
const OUT_PDF = path.join(ROOT, 'Dissertation_Full.pdf');
const OUT_DOCX = path.join(ROOT, 'Dissertation_Full.docx');

function parseArgs(argv) {
  const args = { only: null };
  for (const a of argv.slice(2)) {
    const m = /^--only=(pdf|docx)$/.exec(a);
    if (m) args.only = m[1];
    else if (a === '-h' || a === '--help') args.help = true;
    else throw new Error(`Unknown argument: ${a}`);
  }
  return args;
}

function loadManifest() {
  const p = path.join(__dirname, 'manifest.json');
  const manifest = JSON.parse(fs.readFileSync(p, 'utf8'));
  manifest.options = Object.assign(
    { pageFormat: 'A4', tocDepth: 2, generateTitlePage: true, generateToc: true },
    manifest.options || {}
  );
  return manifest;
}

// Deterministic, unique slugs shared by anchors and the TOC.
function makeSlugger() {
  const seen = new Map();
  return (title) => {
    let base = String(title)
      .toLowerCase()
      .replace(/<[^>]*>/g, '')
      .replace(/[^\wÀ-￿\- ]/g, '')
      .trim()
      .replace(/\s+/g, '-');
    if (!base) base = 'section';
    const n = seen.get(base) || 0;
    seen.set(base, n + 1);
    return n === 0 ? base : `${base}-${n}`;
  };
}

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function renderBody(manifest) {
  const headings = [];
  const md = new MarkdownIt({ html: true, linkify: true, typographer: true });
  md.use(anchor, {
    slugify: makeSlugger(),
    callback: (token, info) => {
      const level = Number(token.tag.slice(1)); // h1 -> 1
      if (level <= manifest.options.tocDepth) {
        headings.push({ level, title: info.title, slug: info.slug });
      }
    },
  });

  const parts = [];
  const missing = [];
  manifest.sections.forEach((section, i) => {
    const file = path.join(ROOT, section.file);
    if (!fs.existsSync(file)) {
      missing.push(section.file);
      return;
    }
    const raw = fs.readFileSync(file, 'utf8');
    const html = md.render(raw);
    const breakDiv = i === 0 ? '' : '<div class="page-break"></div>\n';
    parts.push(`${breakDiv}<section data-source="${escapeHtml(section.file)}">\n${html}\n</section>`);
  });

  if (missing.length) {
    throw new Error(`Manifest references missing files:\n  - ${missing.join('\n  - ')}`);
  }
  return { bodyHtml: parts.join('\n'), headings };
}

function renderTitlePage(meta) {
  return `<div class="title-page">
  <div class="title">${escapeHtml(meta.title || '')}</div>
  <div class="subtitle">${escapeHtml(meta.subtitle || '')}</div>
  <div class="meta">
    ${meta.author ? `<div><strong>${escapeHtml(meta.author)}</strong></div>` : ''}
    ${meta.date ? `<div>${escapeHtml(String(meta.date))}</div>` : ''}
    ${meta.repository ? `<div>${escapeHtml(meta.repository)}</div>` : ''}
  </div>
</div>`;
}

function renderToc(headings) {
  const items = headings
    .map(
      (h) =>
        `<li class="toc-h${h.level}"><a href="#${h.slug}">${escapeHtml(h.title)}</a></li>`
    )
    .join('\n');
  return `<div class="toc">
  <h1>Table of Contents</h1>
  <ul>
${items}
  </ul>
</div>`;
}

function assembleHtml({ manifest, css, bodyHtml, headings, forDocx }) {
  const { options, metadata } = manifest;
  const titlePage = options.generateTitlePage ? renderTitlePage(metadata) : '';
  const toc = options.generateToc ? renderToc(headings) : '';
  // Chromium honours the linked CSS via <style>; html-to-docx maps a subset.
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${escapeHtml(metadata.title || 'Dissertation')}</title>
<style>${css}</style>
</head>
<body>
${titlePage}
${toc}
${bodyHtml}
</body>
</html>`;
}

// Fixed epoch so re-running the build does not churn PDF metadata in git.
const FIXED_DATE = new Date(Date.UTC(2000, 0, 1, 0, 0, 0));

async function buildPdf(html, options) {
  const puppeteer = require('puppeteer');
  const { PDFDocument, PDFHexString } = require('pdf-lib');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  let rawPdf;
  try {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'load' });
    // Ensure fonts are settled before paginating so layout is stable.
    await page.evaluate(() => document.fonts && document.fonts.ready);
    const footer = `<div style="font-size:8px;width:100%;text-align:center;color:#666;">
      <span class="pageNumber"></span> / <span class="totalPages"></span></div>`;
    rawPdf = await page.pdf({
      format: options.pageFormat,
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: '<span></span>',
      footerTemplate: footer,
      margin: { top: '20mm', bottom: '18mm', left: '20mm', right: '18mm' },
    });
  } finally {
    await browser.close();
  }

  // Normalise embedded metadata (dates, producer, document ID) so identical
  // input yields a byte-identical PDF.
  const doc = await PDFDocument.load(rawPdf);
  const pageCount = doc.getPageCount();
  doc.setCreationDate(FIXED_DATE);
  doc.setModificationDate(FIXED_DATE);
  doc.setProducer('disertasi-build');
  doc.setCreator('disertasi-build');
  const zeroId = PDFHexString.of('0'.repeat(32));
  doc.context.trailerInfo.ID = doc.context.obj([zeroId, zeroId]);
  const normalized = await doc.save({ useObjectStreams: false });
  fs.writeFileSync(OUT_PDF, normalized);
  return { bytes: normalized.length, pageCount };
}

// A .docx is a ZIP. html-to-docx stamps docProps/core.xml with the current
// time and the archive stores per-entry mtimes; normalise both so identical
// input yields a byte-identical .docx (no git churn on rebuild).
function normalizeDocx(buffer) {
  const { unzipSync, zipSync, strToU8, strFromU8 } = require('fflate');
  const entries = unzipSync(new Uint8Array(buffer));
  const iso = '2000-01-01T00:00:00Z';
  if (entries['docProps/core.xml']) {
    const xml = strFromU8(entries['docProps/core.xml'])
      .replace(/(<dcterms:created[^>]*>)[^<]*(<\/dcterms:created>)/, `$1${iso}$2`)
      .replace(/(<dcterms:modified[^>]*>)[^<]*(<\/dcterms:modified>)/, `$1${iso}$2`);
    entries['docProps/core.xml'] = strToU8(xml);
  }
  const zipInput = {};
  for (const name of Object.keys(entries)) {
    zipInput[name] = [entries[name], { mtime: FIXED_DATE }];
  }
  return Buffer.from(zipSync(zipInput, { level: 6 }));
}

async function buildDocx(html) {
  const HTMLtoDOCX = require('html-to-docx');
  const buffer = await HTMLtoDOCX(html, null, {
    table: { row: { cantSplit: true } },
    footer: true,
    pageNumber: true,
    font: 'Georgia',
    fontSize: 22, // half-points => 11pt
  });
  const normalized = normalizeDocx(buffer);
  fs.writeFileSync(OUT_DOCX, normalized);
  return { bytes: normalized.length };
}

async function main() {
  const args = parseArgs(process.argv);
  if (args.help) {
    console.log('Usage: node build/build.js [--only=pdf|docx]');
    return;
  }

  const manifest = loadManifest();
  const css = fs.readFileSync(path.join(__dirname, 'assets', 'style.css'), 'utf8');

  console.log(`Building from ${manifest.sections.length} source files...`);
  const { bodyHtml, headings } = renderBody(manifest);
  const html = assembleHtml({ manifest, css, bodyHtml, headings });

  const results = {};
  if (args.only !== 'docx') {
    process.stdout.write('  - Rendering PDF (Chromium)... ');
    results.pdf = await buildPdf(html, manifest.options);
    console.log(`done (${results.pdf.pageCount} pages, ${(results.pdf.bytes / 1024).toFixed(0)} KB)`);
  }
  if (args.only !== 'pdf') {
    process.stdout.write('  - Rendering DOCX... ');
    results.docx = await buildDocx(html);
    console.log(`done (${(results.docx.bytes / 1024).toFixed(0)} KB)`);
  }

  console.log('\nBuild complete.');
  console.log(`  Sections compiled : ${manifest.sections.length}`);
  console.log(`  TOC entries (<= h${manifest.options.tocDepth}) : ${headings.length}`);
  if (results.pdf) console.log(`  ${path.basename(OUT_PDF)} : ${results.pdf.pageCount} pages`);
  if (results.docx) console.log(`  ${path.basename(OUT_DOCX)} : written`);
}

main().catch((err) => {
  console.error('\nBuild failed:', err.message);
  process.exit(1);
});
