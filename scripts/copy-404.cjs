// scripts/copy-404.js
const fs = require('fs');
const path = require('path');

const distIndex = path.resolve(__dirname, '..', 'dist', 'index.html');
const dist404 = path.resolve(__dirname, '..', 'dist', '404.html');

try {
  if (fs.existsSync(distIndex)) {
    fs.copyFileSync(distIndex, dist404);
    console.log('Copied index.html to dist/404.html');
  } else {
    console.error('Build not found. Run npm run build first.');
    process.exit(1);
  }
} catch (err) {
  console.error('Error copying 404:', err);
  process.exit(1);
}
