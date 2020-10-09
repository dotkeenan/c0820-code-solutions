const fs = require('fs');
const copyThisFile = process.argv[2];
const destinationFile = process.argv[3];

fs.readFile(copyThisFile, 'utf8', (err, data) => {
  if (err) throw err;
  fs.writeFile(destinationFile, data, 'utf8', err => {
    if (err) throw err;
  });
});
