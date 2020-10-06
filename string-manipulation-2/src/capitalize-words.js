/* eslint-disable no-unused-vars */

const capitalizeWords = string => {
  const newArr = string.split(' ');
  const resultArr = [];
  for (let i = 0; i < newArr.length; i++) {
    const result = newArr[i][0].toUpperCase() + newArr[i].slice(1).toLowerCase();
    resultArr.push(result);
  }
  return resultArr.join(' ');
};
