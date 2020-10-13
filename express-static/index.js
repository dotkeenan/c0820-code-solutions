/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const app = express();

const absolutePath = path.join(__dirname, 'public');
const middlewareFunc = express.static(absolutePath);

app.use(middlewareFunc);

app.listen(3000, () => {
  console.log('Listening at port 3000');
});
