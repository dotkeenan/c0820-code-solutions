const express = require('express');
const app = express();

const myArr = [
  {
    id: 1,
    name: 'Keenan',
    course: 'JavaScript',
    grade: 99
  },
  {
    id: 1,
    name: 'Keenan',
    course: 'JavaScript',
    grade: 99
  }
];

app.get('/api/grades', res => {
  res.json(myArr);
});
