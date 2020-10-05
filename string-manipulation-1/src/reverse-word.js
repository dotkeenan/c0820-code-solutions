/* eslint-disable no-unused-vars */

/*
iterate over the string argument in reverse
add each character into a storage with concatenation
return the storage.
*/

function reverseWord(word) {
  let result = '';
  for (let i = word.length - 1; i >= 0; i--) {
    result += word[i];
  }
  return result;
}
