/* eslint-disable no-unused-vars */

// const toObject = keyValuePair => {
//   const myObj = {};
//   myObj[keyValuePair[0]] = keyValuePair[1];
//   return myObj;
// };

// es6 alternative
const toObject = keyValuePair => {
  return { [keyValuePair[0]]: keyValuePair[1] };
};
