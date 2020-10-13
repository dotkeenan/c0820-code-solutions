/* eslint-disable no-console */
const express = require('express');
const app = express();

app.use((req, res, next) => {
  const options = {
    root: __dirname
  };

  const url = req.originalUrl;
  switch (url) {
    case '/index.html':
    case '/styles.css':
    case '/main.js':
      res.sendFile(req.originalUrl, options, err => {
        if (err) next(err);
        console.log('sent:', req.originalUrl);
      });
      break;
    default:
      next();
      break;
  }
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

// alternative conditional using if else statement
// if (req.originalUrl === '/index.html') {
//   res.sendFile(req.originalUrl, options, err => {
//     if (err) next(err);
//     console.log('sent:', req.originalUrl);
//   });
// } else if (req.originalUrl === '/styles.css') {
//   res.sendFile(req.originalUrl, options, err => {
//     if (err) next(err);
//     console.log('sent:', req.originalUrl);
//   });
// } else if (req.originalUrl === '/main.js') {
//   res.sendFile(req.originalUrl, options, err => {
//     if (err) next(err);
//     console.log('sent:', req.originalUrl);
//   });
// }
