/* eslint-disable no-console */
const express = require('express');
const app = express();
const path = require('path');

// data model for api
const myArray = [
  {
    id: 1,
    name: 'Beeg Yoshi',
    course: 'Meming',
    grade: 9001
  },
  {
    id: 2,
    name: 'Smol Yoshi',
    course: 'Intro to Meming',
    grade: 4000.5
  }
];

app.get('/api/grades', (req, res) => {
  res.json(myArray);
});

// code for serving static files
const absolutePath = path.join(__dirname, 'public');
const middlewareFunc = express.static(absolutePath);

app.use(middlewareFunc);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
