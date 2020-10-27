/* eslint-disable no-unused-vars */
const take = (array, counter) => {
  const newArr = [];
  if (array.length) {
    for (let i = 0; i < counter; i++) {
      newArr.push(array[i]);
    }
  }
  return newArr;
};
