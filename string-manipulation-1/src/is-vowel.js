/* eslint-disable no-unused-vars */

// first attempt
// function isVowel(char) {
//   const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//   for (let i = 0; i < vowels.length; i++) {
//     if (char === vowels[i]) {
//       return true;
//     }
//   }
//   return false;
// }

// alternate
// function isVowel(char) {
//   return ['a', 'e', 'i', 'o', 'u'].indexOf(char.toLowerCase()) !== -1;
// }

function isVowel(char) {
  return ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].indexOf(char) !== -1;
}
