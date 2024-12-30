const fs = require('fs');
const path = require('path');

// Ensure the `.nojekyll` file exists in the `out` directory
const outDir = path.join(__dirname, 'out');
fs.writeFileSync(path.join(outDir, '.nojekyll'), '', 'utf8');

console.log('Created .nojekyll file in the out directory.');
