/* eslint-disable no-unused-vars */
const numVowels = string => {
  let counter = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (let i = 0; i < string.length; i++) {
    if (vowels.indexOf(string[i]) !== -1) {
      counter++;
    }
  }
  return counter;
};
