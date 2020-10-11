const fs = require('fs');
const userInput = process.argv[3];

const deleteNote = () => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const readParsed = JSON.parse(data);
    delete readParsed.notes[userInput];

    const readString = JSON.stringify(readParsed, null, 2);
    fs.writeFile('./data.json', readString, 'utf8', (err, data) => {
      if (err) throw err;
    });
  });
};

module.exports = deleteNote;
