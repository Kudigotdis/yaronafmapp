const fs = require('fs');
const path = require('path');

const promosDir = path.join(__dirname, '..', 'Assets', 'Promos');
const outFile = path.join(promosDir, 'promos.json');

fs.readdir(promosDir, (err, files) => {
  if (err) {
    console.error('Error reading promos directory:', err);
    process.exit(1);
  }
  const allowed = files.filter(f => /\.(jpe?g|png|gif|mp4|webm)$/i.test(f));
  fs.writeFile(outFile, JSON.stringify(allowed, null, 2), (err) => {
    if (err) {
      console.error('Error writing promos.json:', err);
      process.exit(1);
    }
    console.log('Generated', outFile, 'with', allowed.length, 'entries');
  });
});
