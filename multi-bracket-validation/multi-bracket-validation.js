/* eslint-disable no-undef */
'use strict' ;

const isBalanced = (string) => {
  const arr = string.split('');
  let open = [];

  const openBrackets = {
    '(': true,
    '[': true,
    '{': true,
  };

  const closedBrackets = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  ////// here the website stack Exchange  was source for me
  for (let i = 0, length = arr.length; i < length; i++) {
    if (openBrackets[arr[i]]) {
      open.push(arr[i]);
    } else if (closedBrackets[arr[i]] && open.pop() !== closedBrackets[arr[i]]) {
      return false;
    }
  }

  return !open.length;
};
module.exports = isBalanced ;
// console.log('hi');
// console.log(isBalanced('') === true);
// console.log(isBalanced('()') === true);
// console.log(isBalanced(')()') === false);
// console.log(isBalanced(')(') === false);
