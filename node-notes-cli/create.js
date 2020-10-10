// const fs = require('fs');
// const userInput = process.argv[3];

// const create = fs.readFile('./data.json', 'utf8', (err, data) => {
//   if (err) throw err;
//   const readParsed = JSON.parse(data);
//   const nextId = readParsed.nextId;
//   readParsed.notes[nextId] = userInput;
//   readParsed.nextId++;

//   const readString = JSON.stringify(readParsed, null, 2);
//   fs.writeFile('./data.json', readString, 'utf8', (err, data) => {
//     if (err) throw err;
//   });
// });

// module.exports = create;

const fs = require('fs');
const userInput = process.argv[3];

function create() {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const readParsed = JSON.parse(data);
    const nextId = readParsed.nextId;
    readParsed.notes[nextId] = userInput;
    readParsed.nextId++;

    const readString = JSON.stringify(readParsed, null, 2);
    fs.writeFile('./data.json', readString, 'utf8', (err, data) => {
      if (err) throw err;
    });
  });
}

module.exports = create;
