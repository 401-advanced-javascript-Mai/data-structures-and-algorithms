
'use strict ';


function mergeSort(arr){
  if (arr.length < 2) {
    return arr;
  }
  var mid = Math.floor(arr.length / 2);
  var left = mergeSort(arr.slice(0, mid));
  // console.log('left', left)
  var right = mergeSort(arr.slice(mid));
  // console.log('right', right)
  return merge(left, right);
}

function merge (left, right) {
  var result = [];
  while (left.length > 0 && right.length > 0)
    result.push(left[0] < right[0] ? left.shift() : right.shift());
  return result.concat(left.length ? left : right);
}



module.exports = mergeSort;