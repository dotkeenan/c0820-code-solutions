/* eslint-disable no-unused-vars */
const capitalizeWord = word => {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  } else return word[0].toUpperCase() + word.slice(1).toLowerCase();
};
