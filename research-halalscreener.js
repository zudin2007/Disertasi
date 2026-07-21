#!/usr/bin/env node

/**
 * HALALSCREENER RESEARCH TOOL
 * Cryptocurrency Classification Research Database
 *
 * Queries halalscreener API for cryptocurrency halal status
 * Exports data for dissertation analysis
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Configuration
const API_KEY = process.env.HALALSCREENER_API_KEY;
const BASE_URL = 'api.halalscreener.com';
const RESEARCH_DIR = './research-data';

// Cryptocurrencies untuk research
const CRYPTOCURRENCIES = [
  'bitcoin',
  'ethereum',
  'binance-coin',
  'ripple',
  'cardano',
  'solana',
  'polkadot',
  'stellar',
  'algorand',
  'tezos'
];

// Jurisdictions dalam research
const JURISDICTIONS = {
  'Indonesia': { regulator: 'OJK', code: 'ID' },
  'Malaysia': { regulator: 'BNM', code: 'MY' },
  'Saudi Arabia': { regulator: 'SAMA', code: 'SA' },
  'UAE': { regulator: 'VARA', code: 'AE' },
  'Bahrain': { regulator: 'CBB', code: 'BH' }
};

// Research categories
const RESEARCH_CATEGORIES = {
  'halal_status': 'Cryptocurrency Halal Classification',
  'regulatory_view': 'Regulatory Perspective',
  'shariah_compliance': 'Shariah Compliance Assessment',
  'fatwa_reference': 'Fatwa & Jurisprudence',
  'adoption_status': 'Adoption Status'
};

/**
 * Create research directory structure
 */
function setupResearchEnvironment() {
  if (!fs.existsSync(RESEARCH_DIR)) {
    fs.mkdirSync(RESEARCH_DIR, { recursive: true });
    console.log('✓ Created research directory:', RESEARCH_DIR);
  }

  // Create subdirectories
  const subdirs = [
    'raw-data',
    'processed',
    'analysis',
    'exports',
    'logs'
  ];

  subdirs.forEach(subdir => {
    const fullPath = path.join(RESEARCH_DIR, subdir);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
    }
  });

  console.log('✓ Research environment ready');
}

/**
 * Query halalscreener API
 */
function queryHalalscreener(cryptocurrency) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: BASE_URL,
      port: 443,
      path: `/v1/cryptocurrencies/${cryptocurrency}`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
        'User-Agent': 'Research-Tool/1.0'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            resolve({ error: 'Invalid JSON response' });
          }
        } else if (res.statusCode === 404) {
          resolve({ status: 'not_found', crypto: cryptocurrency });
        } else {
          resolve({ error: `Status ${res.statusCode}` });
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.end();
  });
}

/**
 * Create research record for cryptocurrency
 */
function createResearchRecord(crypto, data) {
  return {
    timestamp: new Date().toISOString(),
    cryptocurrency: crypto,
    halal_status: data.halal_status || 'unknown',
    classification: data.classification || 'unclassified',
    shariah_compliance: data.shariah_compliance || null,
    fatwa_reference: data.fatwa_source || null,
    regulatory_views: {
      Indonesia: 'pending_research',
      Malaysia: 'pending_research',
      GCC: 'pending_research'
    },
    research_notes: `Query status: ${data.status || 'completed'}`,
    source: 'halalscreener_api'
  };
}

/**
 * Export data ke JSON
 */
function exportJSON(data, filename) {
  const filepath = path.join(RESEARCH_DIR, 'exports', `${filename}.json`);
  fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
  console.log(`✓ Exported: ${filepath}`);
  return filepath;
}

/**
 * Export data ke CSV
 */
function exportCSV(data, filename) {
  const filepath = path.join(RESEARCH_DIR, 'exports', `${filename}.csv`);

  // Header
  const headers = ['Cryptocurrency', 'Halal Status', 'Classification', 'Shariah Compliance', 'Source'];
  const rows = [headers];

  // Data rows
  data.forEach(item => {
    rows.push([
      item.cryptocurrency,
      item.halal_status,
      item.classification,
      item.shariah_compliance || 'N/A',
      item.source
    ]);
  });

  const csv = rows.map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
  fs.writeFileSync(filepath, csv);
  console.log(`✓ Exported: ${filepath}`);
  return filepath;
}

/**
 * Create research summary report
 */
function createResearchSummary(results) {
  const summary = {
    research_date: new Date().toISOString(),
    total_queries: results.length,
    cryptocurrencies_analyzed: results.map(r => r.cryptocurrency),
    halal_distribution: {
      halal: results.filter(r => r.halal_status === 'halal').length,
      haram: results.filter(r => r.halal_status === 'haram').length,
      unknown: results.filter(r => r.halal_status === 'unknown').length
    },
    jurisdictions_covered: Object.keys(JURISDICTIONS),
    research_categories: RESEARCH_CATEGORIES,
    next_steps: [
      '1. Cross-reference with regulatory documents (OJK, BNM, VARA, CBB)',
      '2. Map halal classifications to Maqasid Shariah framework',
      '3. Analyze adoption patterns by jurisdiction',
      '4. Compare fatwa positions across different Islamic schools',
      '5. Develop harmonization recommendations'
    ],
    data_files_generated: [
      'cryptocurrency-halal-status.json',
      'cryptocurrency-halal-status.csv',
      'research-summary.json'
    ]
  };

  return summary;
}

/**
 * Main research function
 */
async function runResearch() {
  console.log('\n╔════════════════════════════════════════════════════════════╗');
  console.log('║   HALALSCREENER RESEARCH TOOL                              ║');
  console.log('║   Cryptocurrency Islamic Finance Classification Study      ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');

  // Validate API key
  if (!API_KEY) {
    console.error('❌ Error: HALALSCREENER_API_KEY not set');
    process.exit(1);
  }

  console.log('🔧 Setup Phase');
  console.log('─'.repeat(50));
  setupResearchEnvironment();

  console.log('\n📊 Data Collection Phase');
  console.log('─'.repeat(50));
  console.log(`Querying ${CRYPTOCURRENCIES.length} cryptocurrencies...\n`);

  const results = [];

  for (const crypto of CRYPTOCURRENCIES) {
    try {
      console.log(`  ⏳ Querying: ${crypto}...`);
      const data = await queryHalalscreener(crypto);
      const record = createResearchRecord(crypto, data);
      results.push(record);
      console.log(`  ✓ ${crypto.toUpperCase()}: ${record.halal_status}`);
    } catch (error) {
      console.log(`  ✗ ${crypto}: ${error.message}`);
    }
  }

  console.log('\n💾 Export Phase');
  console.log('─'.repeat(50));

  // Export results
  exportJSON(results, 'cryptocurrency-halal-status');
  exportCSV(results, 'cryptocurrency-halal-status');

  // Create summary
  const summary = createResearchSummary(results);
  exportJSON(summary, 'research-summary');

  // Log summary
  console.log('\n📈 Research Summary');
  console.log('─'.repeat(50));
  console.log(`Total Cryptocurrencies Analyzed: ${summary.total_queries}`);
  console.log(`Halal: ${summary.halal_distribution.halal}`);
  console.log(`Haram: ${summary.halal_distribution.haram}`);
  console.log(`Unknown: ${summary.halal_distribution.unknown}`);

  console.log('\n📁 Output Files');
  console.log('─'.repeat(50));
  console.log(`Location: ${path.resolve(RESEARCH_DIR)}`);
  summary.data_files_generated.forEach(file => {
    console.log(`  ✓ ${file}`);
  });

  console.log('\n🎯 Next Steps for Dissertation');
  console.log('─'.repeat(50));
  summary.next_steps.forEach(step => {
    console.log(`  ${step}`);
  });

  console.log('\n✅ Research data collection complete!\n');
}

// Run research
runResearch().catch(error => {
  console.error('❌ Error:', error.message);
  process.exit(1);
});
