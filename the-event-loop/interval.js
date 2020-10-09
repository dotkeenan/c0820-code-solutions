/* eslint-disable no-console */
let count = 3;

const myInterval = setInterval(() => {
  if (count) {
    console.log(count);
    count--;
  } else {
    console.log('Blast off!');
    clearInterval(myInterval);
  }
}, 1000);
