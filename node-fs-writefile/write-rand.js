const fs = require('fs');
const randNum = Math.random();

fs.writeFile('random.txt', randNum, 'utf8', (err, data) => {
  if (err) throw err;
});
