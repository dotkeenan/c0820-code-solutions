/* eslint-disable no-console */
const fs = require('fs');
const userInput = process.argv[3];
const dataJSON = require('./data.json');

const deleteNote = () => {
  if (!userInput) {
    console.log('Please enter the number of the entry for deletion');
    process.exit(1);
  }
  delete dataJSON.notes[userInput];
  const readString = JSON.stringify(dataJSON, null, 2);

  fs.writeFile('./data.json', readString, 'utf8', (err, data) => {
    if (err) throw err;
  });
};

module.exports = deleteNote;

// Old working code w/o require('./data.json'), not sure which is better
// const fs = require('fs');
// const userInput = process.argv[3];

// const deleteNote = () => {
//   fs.readFile('./data.json', 'utf8', (err, data) => {
//     if (err) throw err;
//     const readParsed = JSON.parse(data);
//     delete readParsed.notes[userInput];

//     const readString = JSON.stringify(readParsed, null, 2);
//     fs.writeFile('./data.json', readString, 'utf8', (err, data) => {
//       if (err) throw err;
//     });
//   });
// };

// module.exports = deleteNote;
