/* eslint-disable no-unused-vars */
const invert = source => {
  const newObj = {};
  for (const prop in source) {
    newObj[source[prop]] = prop;
  }
  return newObj;
};

// newObj[props] = source[props];

/*
iterate over the source with a for in?
Then add the new key and value to the new object (switching the key and value).
*/
