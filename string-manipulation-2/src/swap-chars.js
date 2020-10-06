/* eslint-disable no-unused-vars */

// Works but seems wrong since I turned it into an array
// const swapChars = (firstIndex, secondIndex, string) => {
//   const newArr = string.split('');
//   const tempValue = newArr[firstIndex];
//   newArr[firstIndex] = newArr[secondIndex];
//   newArr[secondIndex] = tempValue;
//   return newArr.join('');
// };

const swapChars = (firstIndex, secondIndex, string) => {
  let newStr = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newStr += string[secondIndex];
    } else if (i === secondIndex) {
      newStr += string[firstIndex];
    } else newStr += string[i];
  }
  return newStr;
};
