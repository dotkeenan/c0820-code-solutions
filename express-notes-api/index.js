/* eslint-disable no-console */
const express = require('express');
const app = express();
const dataJson = require('./data.json');
const notes = dataJson.notes;
const notesValues = Object.values(notes);
// const path = require('path');
// const publicPath = path.join(__dirname, 'public');
// const middlewareFunc = express.static(absolutePath);

const jsonMiddleware = express.json();
app.use(jsonMiddleware);

app.get('/api/notes', (req, res, next) => {
  res.json(Object.values(notes));
  res.sendStatus(200);
});

app.get('/api/notes/:id', (req, res, next) => {
  const parsedId = parseInt(req.params.id, 10);
  const noteIndex = notesValues.findIndex(note => note.id === parsedId);

  // My logic doesn't work.  if :id is -10, it satisfies both the first and second
  // conditionals
  if (parsedId < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } if (noteIndex === -1) {
    res.status(404).json({ error: 'note not found' });
  } if (noteIndex >= 0) {
    console.log('parsedId:', parsedId);
    res.status(200).json(notesValues[noteIndex]);
  }
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
