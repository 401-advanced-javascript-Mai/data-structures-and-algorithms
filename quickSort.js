'use strict ';
/* eslint-disable no-cond-assign */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */

function swap(itemsToSorted, leftIndex, rightIndex){
  var temp = itemsToSorted[leftIndex];
    itemsToSorted[leftIndex] = itemsToSorted[rightIndex];
    itemsToSorted[rightIndex] = temp;
  }

  function partition(itemsToSorted, left, right) {
    var pivot   = itemsToSorted[Math.floor((right + left) / 2)], //middle element
    i       = left, //left pointer
    j       = right; //right pointer
    while (i <= j) {
      while (itemsToSorted[i] < pivot) {
        i++;
      }
      while (itemsToSorted[j] > pivot) {
        j--;
      }
      if (i <= j) {
        swap(itemsToSorted, i, j); //sawpping two elements
        i++;
        j--;
      }
    }
    return i;
  }

   function quickSort(itemsToSorted, left, right) {
    var index;
    if (itemsToSorted.length > 1) {
      index = partition(itemsToSorted, left, right); //index returned from partition
      if (left < index - 1) { //more elements on the left side of the pivot
        quickSort(itemsToSorted, left, index - 1);
      }
      if (index < right) { //more elements on the right side of the pivot
        quickSort(itemsToSorted, index, right);
      }
    }
    return itemsToSorted;
  }

  module.exports = quickSort ;
  // first call to quick sort
//   var itemsToSorted = [5,3,7,6,2,9];
// var sortedArray = quickSort(itemsToSorted, 0, itemsToSorted.length - 1);
// console.log(sortedArray); //prints [2,3,5,6,7,9]

// function QuickSort(arr, left, right){
//   if (left < right);
//   // Partition the array by setting the position of the pivot value
//   let  position = Partition(arr, left, right);
//   // Sort the left
//   QuickSort(arr, left, position - 1);
//   // Sort the right
//   QuickSort(arr, position + 1, right);

// function  Partition(arr, left, right){
//     // set a pivot value as a point of reference
//     let  pivot = arr[right] ;
//     // create a variable to track the largest index of numbers lower than the defined pivot
//     let  low =  left - 1 ;
//     for( let i = left ; i < right ; i++){

//       if( arr[i] = pivot){
//         low++ ;
//         Swap (arr, i, low);
//       }
//     }
//     // place the value of the pivot location in the middle.
//     // all numbers smaller than the pivot are on the left, larger on the right.
//     Swap (arr, right, low + 1);
//     // return the pivot index point
//     return low + 1 ;
//   }

//   function Swap (arr, i, low){
//     let  temp;
//     temp = arr[i];
//     arr[i] = arr[low];
//     arr[low] = temp ;
//   }
// }
// let arr = [8,4,23,42,16,15];
// QuickSort(arr, 0,arr.length -1);