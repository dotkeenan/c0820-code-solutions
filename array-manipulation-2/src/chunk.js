/* eslint-disable no-unused-vars */
// const chunk = (array, size) => {
//   let n = 0;
//   const newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     if (i < size) {
//       const tempArr = array[i];
//       newArr.push(tempArr);
//     } else {
//       n++;
//     }
//   }
//   console.log(newArr);
//   return newArr;
// };

// const chunk = (array, size) => {
//   array.reduce((resultArray, item, index) => {
//     const chunkIndex = Math.floor(index / size);

//     if (!resultArray[chunkIndex]) {
//       resultArray[chunkIndex] = [];
//     }
//     resultArray[chunkIndex].push(item);
//     console.log(resultArray);
//     return resultArray;

//   }, []);

// };

const chunk = (array, size) => {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(array.slice(i, size));
    i += size;
  }
  // console.log(newArr);
};

/*
Need to iterate over the full array.
Need to divide the array into smaller arrays that are the length of 'size'

need to push the individual small arrays into a new array and return that array.

*/
