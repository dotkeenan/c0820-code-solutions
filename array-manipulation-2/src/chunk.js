/* eslint-disable no-unused-vars */
const chunk = (array, size) => {
  const chunkedArr = [];
  for (const elem of array) {
    const last = chunkedArr[chunkedArr.length - 1];
    if (!last || last.length === size) {
      chunkedArr.push([elem]);
    } else {
      last.push(elem);
    }
  }
  return chunkedArr;
};

// previous attempt that should work.

/* const chunk = (array, size) => {
  const newArr = [];
  for (let i = 0; i < array.length; i += size) {
    newArr.push([array.slice(i, i + size)]);
  }
  console.log(newArr);
  return newArr;
}; */
