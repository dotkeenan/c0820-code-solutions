/* eslint-disable no-unused-vars */
const isAnagram = (firstString, secondString) => {
  // relied HEAVILY on methods.  Possibly attempt later with no methods?
  const sortFirst = firstString.split('').sort().join('').trim();
  const sortSecond = secondString.split('').sort().join('').trim();
  return (sortFirst === sortSecond);
};
