/* eslint-disable no-console */
const express = require('express');
const app = express();

const grades = [];
let nextId = 1;

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  req.body.id = nextId;
  grades.push(req.body);
  res.status(201).send(req.body);
  nextId++;
});

app.listen(3000, () => console.log('Listening on port 3000'));

// Other way in which I assigned all the app methods to a const and passed them
// as args in other methods.
// /* eslint-disable no-console */
// const express = require('express');
// const app = express();

// const grades = [];
// let nextId = 1;

// const getJson = app.get('/api/grades', (req, res) => {
//   res.json(grades);
// });

// const parseJson = express.json(getJson);
// app.use(parseJson)

// app.post('/api/grades', parseJson, (req, res) => {
//   req.body.id = nextId;
//   grades.push(req.body);
//   res.status(201).send(req.body);
//   nextId++;
// });

// app.listen(3000, () => console.log('Listening on port 3000'));
