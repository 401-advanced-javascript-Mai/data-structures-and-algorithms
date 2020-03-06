  
'use strict ';

const quickSort = require('./quickSort.js');

describe('Quick sort', ()=> {
  it ('rreturn empty array' , ()=>{
    let itemsToSorted = [] ;
    expect(quickSort(itemsToSorted , 0 , itemsToSorted.length - 1)).toEqual([]);
  });

  it('Return sorted array', () => {
    let itemsToSorted = [8,4,23,42,16,15];
    let expected = [4,8,15,16,23,42];
    expect(quickSort(itemsToSorted , 0 , itemsToSorted.length - 1)).toEqual(expected);
  });
});