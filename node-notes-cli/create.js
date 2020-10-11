/* eslint-disable no-console */
const fs = require('fs');
const userInput = process.argv[3];
const dataJSON = require('./data.json');

const create = () => {
  // prevent nextId incrementation if no user input exists
  if (!process.argv[3]) {
    console.log('Please enter a note');
    process.exit(1);
  }
  const nextId = dataJSON.nextId;
  dataJSON.notes[nextId] = userInput;
  dataJSON.nextId++;

  const readString = JSON.stringify(dataJSON, null, 2);

  fs.writeFile('./data.json', readString, 'utf8', (err, data) => {
    if (err) throw err;
  });
};

module.exports = create;

// Old working code w/o require('./data.json'), not sure which is better

// const fs = require('fs');
// const userInput = process.argv[3];

// const create = () => {
//   fs.readFile('./data.json', 'utf8', (err, data) => {
//     if (err) throw err;
//     const readParsed = JSON.parse(data);
//     const nextId = readParsed.nextId;
//     readParsed.notes[nextId] = userInput;
//     readParsed.nextId++;

//     const readString = JSON.stringify(readParsed, null, 2);
//     fs.writeFile('./data.json', readString, 'utf8', (err, data) => {
//       if (err) throw err;
//     });
//   });
// };

// module.exports = create;
