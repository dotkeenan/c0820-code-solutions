/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
const root = document.getElementById('root');

const element = React.createElement(
  'h1',
  null,
  'Hello, React!!'
);

console.log(element);

ReactDOM.render(element, root);
