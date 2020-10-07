/* eslint-disable no-unused-vars */
const defaults = (target, source) => {
  const sourceKeys = Object.keys(source);
  sourceKeys.forEach(element => {
    if (typeof target[element] === 'undefined') {
      target[element] = source[element];
    }
  });
};

// const defaults = (target, source) => {
//   const sourceKeys = Object.keys(source);
//   sourceKeys.forEach(element => {
//     if (!target[element]) {
//       target[element] = source[element];
//     }
//   });
// };
