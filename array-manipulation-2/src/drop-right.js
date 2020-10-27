/* eslint-disable no-unused-vars */
const dropRight = (array, count) => {
  const newArr = [];
  for (let i = 0; i < array.length - count; i++) {
    newArr.push(array[i]);
  }
  return newArr;
};
