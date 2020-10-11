const fs = require('fs');
const userNoteNum = process.argv[3];
const userNote = process.argv[4];
const dataJSON = require('./data.json');

const update = () => {
  dataJSON.notes[userNoteNum] = userNote;
  const readString = JSON.stringify(dataJSON, null, 2);

  fs.writeFile('./data.json', readString, 'utf8', (err, data) => {
    if (err) throw err;
  });
};

module.exports = update;

// Old working code w/o require('./data.json'), not sure which is better

// const fs = require('fs');
// const userNoteNum = process.argv[3];
// const userNote = process.argv[4];

// const update = () => {
//   fs.readFile('./data.json', 'utf8', (err, data) => {
//     if (err) throw err;
//     const readParsed = JSON.parse(data);
//     readParsed.notes[userNoteNum] = userNote;

//     const readString = JSON.stringify(readParsed, null, 2);
//     fs.writeFile('./data.json', readString, 'utf8', (err, data) => {
//       if (err) throw err;
//     });
//   });
// };

// module.exports = update;
