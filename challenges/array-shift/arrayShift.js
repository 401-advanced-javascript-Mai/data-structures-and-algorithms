'use strict';

let toBeValid = module.exports = {}
//////// first way to put the avlue in the middle of array us splice 

// let array = [1, 2, 3, 4, 5];
// let value = "mai";


 toBeValid.insertArray = function(array, value) {
    let middleIndex = Math.ceil(array.length / 2)

    array.splice(middleIndex, 0, value)
    return array

}
// insertArray(array, value);


// console.log ('array' , array)





////////// the second way to add value in the middle of array using for loop 
let arrayAfterInsert = [];
toBeValid.insertShiftArray = function(arr, val) {
    // arr[arr.length+1]= ''


    for (let index = 0; index <= arr.length; index++) {
        if (index < Math.ceil(arr.length / 2)) {
            arrayAfterInsert[index] = arr[index];
        }
        else if (index == Math.ceil(arr.length / 2)) {
            arrayAfterInsert[index] = val;
        }
        else if (index > Math.ceil(arr.length / 2)) {
            arrayAfterInsert[index] = arr[index - 1];

        }

    }
}
// insertShiftArray([1, 2, 3, 4], "mai");
console.log(arrayAfterInsert);




// function insertShiftArray(arr, val) {
//     let middle = Math.ceil(arr.length / 2);
//     let arrayAfterInsert = [];
//     // arr[arr.length+1]= ''
//     arr.forEach((element, indx) => {
//         console.log("a", element);
//         console.log("i", indx)
//         if (indx < Math.ceil(arr.length / 2)) {
//             arrayAfterInsert[indx] = element;
//         } else
//             if (indx = Math.ceil(arr.length / 2)) {
//                 arrayAfterInsert[indx] = val;

//             } else
//                 if (indx > Math.ceil(arr.length / 2)) {
//                     arrayAfterInsert[indx] = element[i - 1];
//                 }

//     })
//     console.log(arrayAfterInsert)


//     // for (let i = 0; i <= arr.length; ++i) {
//     //     if (i < middle){newArray[i] = arr[i]; }

//     //     if (i === middle){newArray[i] = val;}

//     //     if (i > middle){newArray[i] = arr[i - 1];}
//     // }
//     // return newArray;
// }
// insertShiftArray([1, 2, 3, 4], "mai");
// console.log('insertarray()', insertarray(array, value))

// module.exports = toBeValid ;
