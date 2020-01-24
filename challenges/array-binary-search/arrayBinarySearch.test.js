'use strict' ;
const binary = require('./arrayBinarySearch')

describe('Binary search method ' , ()=>{

    it(' validate if the array( the input ) is sorted ', () => {
       let array = [7,8,5,2,1] ;
        expect(binary.sorted(array)).toEqual([1,2,5,7,8])
     
        // .toBeEqual([1,2,5,7,8]) ;
    })
    it ('validate if the function binarySearch  return the coreect value ', () => {
        let array = [1,14,28,95] ;
        let value = 14 ;
        expect( binary.binarySearch(array, value)).toEqual(14) ;
    })
})

