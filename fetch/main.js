/* eslint-disable no-console */
const response = fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data));
  // .catch(error => console.error(error.message));

console.log('promise info:', response);

const pokemon = fetch('https://pokeapi.co/api/v2/pokemon/gengar')
  .then(response => response.json())
  .then(data => console.log(data));

console.log('promise info2:', pokemon);
