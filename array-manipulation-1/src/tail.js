/* eslint-disable no-unused-vars */
const tail = array => {
  const newArr = [];
  for (let i = 1; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
};
