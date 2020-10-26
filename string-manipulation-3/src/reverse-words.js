/* eslint-disable no-unused-vars */
/*
A version of String with every character of each word reversed, but the words
in their original order.

reverseWords('All Code All Day')      // -> "llA edoC llA yaD"
reverseWords('What is unit testing?') // -> "tahW si tinu ?gnitset"
reverseWords('follow your passion')   // -> "wollof ruoy noissap"
reverseWords('Hello, how are you?')   // -> ",olleH woh era ?uoy"
*/

function reverseWords(string) {
  const strArr = string.split(' ');
  const strArrReverse = [];
  let strReverse = '';
  for (const word of strArr) {
    strReverse = '';
    for (let i = word.length - 1; i >= 0; i--) {
      strReverse += word[i];
    }
    strArrReverse.push(strReverse);
  }
  return strArrReverse.join(' ');
}
