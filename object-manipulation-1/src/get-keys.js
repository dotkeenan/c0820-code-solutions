/* eslint-disable no-unused-vars */
const getKeys = object => {
  const props = [];
  for (const keys in object) {
    props.push(keys);
  }
  return props;
};

// not sure if we're allowed to use getOwnPropertyNames;
// const getKeys = object => Object.getOwnPropertyNames(object);
