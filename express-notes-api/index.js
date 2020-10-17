/* eslint-disable no-console */
const express = require('express');
const app = express();
const dataJson = require('./data.json');
const fs = require('fs');

const jsonMiddleware = express.json();
app.use(jsonMiddleware);

// user can get all notes
app.get('/api/notes', (req, res, next) => {
  res.status(200).json(Object.values(dataJson.notes));
});

// user can get all notes alternative code
// app.get('/api/notes', (req, res, next) => {
//   const notesArr = [];
//   for (const props in dataJson.notes) {
//     notesArr.push(dataJson.notes[props]);
//   }
//   res.status(200).json(notesArr);
// });

// user can get note by id
app.get('/api/notes/:id', (req, res, next) => {
// parseInt parses up to the first non digit char.  So it ignores something like
// 10h and just returns 10.  Not sure how to get around this.
  const inputId = parseInt(req.params.id, 10);
  if (!Number.isInteger(inputId) || inputId <= 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
    return;
  }
  // if (!dataJson.notes[inputId]) {
  if (typeof dataJson.notes[inputId] === 'undefined') {
    res.status(404).json({ error: `cannot find note with id ${inputId}` });
    return;
  }
  res.status(200).json(dataJson.notes[inputId]);
});

// user can add a note
app.post('/api/notes', (req, res, next) => {
  console.log(req.body);
  if (Object.keys(req.body).length === 0) {
    res.status(400).json({ error: 'content is a required field' });
  }
  if (Object.keys(req.body).length > 0) {
    dataJson.notes[dataJson.nextId] = req.body;
    dataJson.notes[dataJson.nextId].id = dataJson.nextId;
    dataJson.nextId++;

    const dataJsonString = JSON.stringify(dataJson, null, 2);

    fs.writeFile('data.json', dataJsonString, err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occured.' });
        return;
      }
      res.status(201).json(req.body);
    });
  }
});

// user can delete a note
app.delete('/api/notes/:id', (req, res, next) => {
  const inputId = parseInt(req.params.id, 10);

  if (!Number.isInteger(inputId) || inputId <= 0) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
    return;
  }

  if (inputId) {
    if (typeof dataJson.notes[inputId] === 'undefined') {
      res.status(400).json({
        error: `cannot find note with id ${inputId}`
      });
      return;
    }

    delete dataJson.notes[inputId];
    const dataJsonString = JSON.stringify(dataJson, null, 2);

    fs.writeFile('data.json', dataJsonString, err => {
      if (err) {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occured.'
        });
        return;
      }
      res.sendStatus(204);
    });
  }
});

// user can update a note
app.put('/api/notes/:id', (req, res, next) => {
  const inputId = parseInt(req.params.id, 10);

  if (Object.keys(req.body).length === 0) {
    res.status(400).json({
      error: 'content is a required field'
    });
    return;
  }

  if (!Number.isInteger(inputId) || inputId <= 0) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
    return;
  }

  if (typeof dataJson.notes[inputId] === 'undefined') {
    res.status(404).json({
      error: `cannot find note with id ${inputId}`
    });
    return;
  }

  dataJson.notes[inputId].content = req.body.content;

  const dataJsonString = JSON.stringify(dataJson, null, 2);
  fs.writeFile('data.json', dataJsonString, err => {
    if (err) {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred'
      });
    }
    res.status(200).json(req.body);
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
