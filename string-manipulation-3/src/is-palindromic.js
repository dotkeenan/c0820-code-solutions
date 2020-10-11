/* eslint-disable no-unused-vars */
// const isPalindromic = string => {
//   console.log('hi');
//   const test = [];
//   const reversedStringArr = string.slice().reverse().forEach(x => { test.push(x); });
//   console.log(test);
//   const reversedString = join(reversedStringArr);
//   console.log('reversedString', reversedString);
//   return string === reversedString;
// };

// This seems refactorable or simplifiable with methods.
const isPalindromic = string => {
  // add each letter of original string to an array, ignoring spaces.
  const stringArr = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      i++;
    }
    stringArr.push(string[i]);
  }
  // console.log('stringArr:', stringArr);
  // join the array elements into a string.
  const reversedOriginalString = stringArr.join('');

  // add each letter of original string to an array, in reversed order, ignoring spaces.
  const reversedStringArr = [];
  for (let j = string.length - 1; j >= 0; j--) {
    if (string[j] === ' ') {
      j--;
    }
    reversedStringArr.push(string[j]);
  }
  // join the array elements into a string.
  const reversedString = reversedStringArr.join('');
  // console.log('reversedString:', reversedString);
  return reversedOriginalString === reversedString;
};
