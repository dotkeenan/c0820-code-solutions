/* eslint-disable no-console */
const response = fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data));
  // .catch(error => console.error(error.message));

console.log('promise info:', response);
