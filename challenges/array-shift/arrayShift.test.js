'use strict';
const toBeValid = require('../array-shift/arrayShift.js')



describe('Array shift Module',()=>{
    it('validate if the function return a new array so it have a new length  ',()=>{
let array= [ 2,4,6,8] ;
let value = 5   
        expect(toBeValid.insertArray(array, value).length).toEqual(5)
    })
    it('validate  if the value but in the correct index in the middle of array ',()=>{
        let testArray=toBeValid.insertArray([2,4,6,8], 5)
        expect(testArray[2]).toEqual(5)
    // })
  
})
})



// for second function
// describe('Array shift Module',()=>{
//     it('validate if the function return a new array so it have a new length  ',()=>{
// let array= [ 2,4,6,8] ;
// let value = 5   
//         expect(toBeValid.arrayAfterInsert.length).toEqual(5)
//     })
//     it('validate  if the value but in the correct index in the middle of array ',()=>{
//         let testArray=toBeValid.insertShiftArray([2,4,6,8], 5)
//         expect(testArray[2]).toEqual(5)
//     // })
  
// })
// })