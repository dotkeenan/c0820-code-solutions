/* eslint-disable no-console */
const express = require('express');
const app = express();
// const path = require('path');

const grades = [];
let nextId = 1;

const getJson = app.get('/api/grades', (req, res, next) => {
  res.json(grades);
});

const parseJson = express.json(getJson);

app.post('/api/grades', parseJson, (req, res) => {
  req.body.id = nextId;
  grades.push(req.body);
  res.status(201).send(req.body);
  nextId++;
});

// app.post('/api/grades');

// app.post('/api/grades', (req, res, next) => {
//   console.log('hello');
//   req.id = nextId;
//   grades.push(req);
//   nextId++;
// });

app.listen(3000, () => console.log('Listening on port 3000'));
