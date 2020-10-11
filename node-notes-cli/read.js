/* eslint-disable no-console */
const fs = require('fs');

const read = () => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const readParsed = JSON.parse(data);
    for (const [key, value] of Object.entries(readParsed.notes)) {
      console.log(`${key}: ${value}`);
    }
  });
};

module.exports = read;

// new working code that uses require('./data.json'), but I feel using
// fs.readFile is more appropriate for a 'read' functionality.
// const fs = require('fs');
// const dataJSON = require('./data.json');
// const read = () => {
//   for (const [key, value] of Object.entries(dataJSON.notes)) {
//     console.log(`${key}: ${value}`);
//   }
// };

// module.exports = read;
