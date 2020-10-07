/* eslint-disable no-unused-vars */
// Non forEach style
// const omit = (source, keys) => {
//   const sourceKeys = Object.keys(source);
//   const newObj = {};
//   for (let i = 0; i < sourceKeys.length; i++) {
//     if (!keys.includes(sourceKeys[i])) {
//       newObj[sourceKeys[i]] = source[sourceKeys[i]];
//     }
//   }
//   console.log(newObj);
//   return newObj;
// };

const omit = (source, keys) => {
  const sourceKeys = Object.keys(source);
  const newObj = {};
  sourceKeys.forEach(properties => {
    if (!keys.includes(properties)) {
      newObj[properties] = source[properties];
    }
  });
  return newObj;
};

/*
go through the keys: foo, baz.
while on each iteration (example foo), iterate over source(foo, bar, baz)
check if foo === any of indexes of source.  It finds one match.
add the non matches to a temporary object.
now loop over the temporary object and check the next key.

maybe copy the source into a new object with Object.assign(), and then remove properties
that match with the keys.
*/
