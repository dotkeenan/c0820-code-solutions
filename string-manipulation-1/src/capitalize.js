/* eslint-disable no-unused-vars */

// long version
// function capitalize(word) {
//   let result = word.charAt(0).toUpperCase();
//   for (var i = 1; i < word.length; i++) {
//     result += word.charAt(i).toLowerCase();
//   }
//   return result;
// }

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
