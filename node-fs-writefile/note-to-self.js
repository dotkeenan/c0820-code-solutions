const fs = require('fs');

const userInput = process.argv[2];

fs.writeFile('note.txt', userInput, 'utf8', (err, data) => {
  if (err) throw err;
});
