#!/usr/bin/env node
/*
 * Regenerate TABLE_OF_CONTENTS.md from the canonical source.
 *
 *   node build/gen-toc.js           -> rewrites TABLE_OF_CONTENTS.md
 *   node build/gen-toc.js --check   -> exit 1 if the file is stale (CI-friendly)
 *
 * TABLE_OF_CONTENTS.md is a GENERATED navigation document. Its single source of
 * truth is the ordered chapter/appendix list in build/manifest.json plus the
 * headings inside those Markdown files. Do not hand-edit the TOC — edit a chapter
 * heading or reorder the manifest, then rerun this script (`npm run toc`).
 *
 * It intentionally does NOT print page numbers: pages only exist after Chromium
 * paginates the PDF, and the previous hand-maintained TOC carried fabricated,
 * long-drifted page numbers. Hierarchy + stable links are what a source-tree TOC
 * can guarantee; the compiled PDF/DOCX carry their own paginated TOC.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'TABLE_OF_CONTENTS.md');

// Headings that are authoring scaffolding, not real sections — kept out of the TOC.
const SCAFFOLD = /(word count|dissertation progress|writing timeline|chapters? completed|remaining chapters?|estimated remaining|recommended (pace|writing)|words written|total dissertation)/i;

function loadManifest() {
  return JSON.parse(fs.readFileSync(path.join(__dirname, 'manifest.json'), 'utf8'));
}

// Extract ATX headings (levels 1-3), skipping fenced code blocks so ``` art with
// leading #'s is not mistaken for a heading.
function extractHeadings(md) {
  const out = [];
  let inFence = false;
  for (const line of md.split(/\r?\n/)) {
    if (/^\s*(```|~~~)/.test(line)) { inFence = !inFence; continue; }
    if (inFence) continue;
    const m = /^(#{1,3})\s+(.*\S)\s*$/.exec(line);
    if (!m) continue;
    out.push({ level: m[1].length, title: m[2].trim() });
  }
  return out;
}

function buildToc(manifest) {
  const lines = [
    '# TABLE OF CONTENTS',
    '',
    '<!-- GENERATED FILE — do not hand-edit.',
    '     Produced by `npm run toc` (build/gen-toc.js) from build/manifest.json and the',
    '     chapter/appendix Markdown. To change this TOC, edit a source heading or reorder',
    '     build/manifest.json, then rerun `npm run toc`. Page numbers live only in the',
    '     compiled PDF/DOCX, which carry their own paginated table of contents. -->',
    '',
    `**${manifest.metadata.title}**  `,
    `*${manifest.metadata.subtitle}*`,
    '',
    '---',
    '',
  ];

  manifest.sections.forEach((section) => {
    const file = path.join(ROOT, section.file);
    if (!fs.existsSync(file)) return;
    const headings = extractHeadings(fs.readFileSync(file, 'utf8'));
    const isAbstract = section.file === 'ABSTRACT.md';
    let prevKey = null;
    headings.forEach((h) => {
      if (SCAFFOLD.test(h.title)) return;
      // The abstract's only sub-heading is a title echo, not a navigable section.
      if (isAbstract && h.level > 1) return;
      const key = `${h.level}:${h.title}`;
      if (key === prevKey) return; // drop an exact duplicate heading (e.g. repeated "References for Chapter 2")
      if (h.level === 1) {
        lines.push(`## ${h.title}`, '');
      } else if (h.level === 2) {
        // Skip a section-file's title-echo subtitle (h2 immediately restating the doc subtitle).
        if (h.title === manifest.metadata.subtitle) { prevKey = key; return; }
        lines.push(`- ${h.title}`);
      } else if (h.level === 3) {
        // Numbered subsections only (e.g. 2.7.1, 3.5.3, 5.5.5) — keeps the TOC navigable
        // without pulling in every unnumbered prose sub-heading.
        if (/^\d/.test(h.title)) lines.push(`  - ${h.title}`);
      }
      prevKey = key;
    });
    lines.push('');
  });

  // Collapse trailing blank lines to a single newline for a stable, deterministic file.
  while (lines.length && lines[lines.length - 1] === '') lines.pop();
  return lines.join('\n') + '\n';
}

function main() {
  const check = process.argv.slice(2).includes('--check');
  const toc = buildToc(loadManifest());
  if (check) {
    const current = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : '';
    if (current !== toc) {
      console.error('TABLE_OF_CONTENTS.md is stale. Run `npm run toc` to regenerate.');
      process.exit(1);
    }
    console.log('TABLE_OF_CONTENTS.md is up to date.');
    return;
  }
  fs.writeFileSync(OUT, toc);
  const entries = toc.split('\n').filter((l) => l.startsWith('- ') || l.startsWith('  - ') || l.startsWith('## ')).length;
  console.log(`Wrote TABLE_OF_CONTENTS.md (${entries} entries).`);
}

main();
