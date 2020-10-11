/* eslint-disable no-console */
const dataJSON = require('./data.json');

const read = () => {
  for (const [key, value] of Object.entries(dataJSON.notes)) {
    console.log(`${key}: ${value}`);
  }
};

module.exports = read;

// Old working code that didn't use require('./data.json'), not sure which is better
// const fs = require('fs');

// const read = () => {
//   fs.readFile('./data.json', 'utf8', (err, data) => {
//     if (err) throw err;
//     const readParsed = JSON.parse(data);
//     for (const [key, value] of Object.entries(readParsed.notes)) {
//       console.log(`${key}: ${value}`);
//     }
//   });
// };

// module.exports = read;

// const fs = require('fs');\
