/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');

const promiseObject = takeAChance('Keenan');

promiseObject.then(value => {
  console.log(value);
}, reason => {
  console.error(reason.message);
});
