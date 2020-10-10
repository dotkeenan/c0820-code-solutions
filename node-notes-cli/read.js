/* eslint-disable no-console */
const fs = require('fs');
// const dataJSON = require('./data.json');

function read() {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const readParsed = JSON.parse(data);
    for (const [key, value] of Object.entries(readParsed.notes)) {
      console.log(`${key}: ${value}`);
    }
  });
}

module.exports = read;
