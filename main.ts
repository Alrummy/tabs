const fs = require('fs');
const path = require('path');

// The joke: a "tabs vs spaces" entry that answers with a number, 137, and refuses to indent the debate either way.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
const target = path.join(outDir, 'entry.txt');
fs.writeFileSync(target, '137', { encoding: 'utf8' });