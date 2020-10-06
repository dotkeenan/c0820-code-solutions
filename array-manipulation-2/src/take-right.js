/* eslint-disable no-unused-vars */
const takeRight = (array, count) => {
  const newArr = [];
  if (array.length) {
    for (let i = array.length - count; i < array.length; i++) {
      newArr.push(array[i]);
    }
  }
  return newArr;
};
