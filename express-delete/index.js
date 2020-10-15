/* eslint-disable no-console */
const express = require('express');
const app = express();

const myArr = [
  {
    id: 100,
    name: 'Keenan',
    course: 'JavaScript',
    grade: 99
  },
  {
    id: 200,
    name: 'Luke',
    course: 'Express',
    grade: 44
  }
];

const jsonMiddleware = express.json();
app.use(jsonMiddleware);

app.get('/api/grades', (req, res, next) => {
  res.json(myArr);
});

app.delete('/api/grades/:id', (req, res, next) => {
  const parsedId = parseInt(req.params.id, 10);
  for (let i = 0; i < myArr.length; i++) {
    if (parsedId === myArr[i].id) {
      myArr.splice(i, 1);
    }
  }
  res.sendStatus(204);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
