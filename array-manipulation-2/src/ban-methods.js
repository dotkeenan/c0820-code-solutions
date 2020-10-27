/* eslint-disable no-unused-vars */

function banMethods(fn, ...methods) {
  const banned = new RegExp(`${methods.map(m => '\\.' + m).join('|')}`, 'g');
  if (banned.test(fn.toString())) {
    throw new Error(`The following methods are banned for this problem: ${methods.join(', ')}`);
  }
}
