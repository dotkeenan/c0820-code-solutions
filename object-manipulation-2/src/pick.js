/* eslint-disable no-unused-vars */
const pick = (source, keys) => {
  const newObj = {};
  for (let i = 0; i < keys.length; i++) {
    for (const props in source) {
      if (props === keys[i] && source[keys[i]] !== undefined) {
        newObj[props] = source[props];
      }
    }
  }
  return newObj;
};
