/* eslint-disable no-undef */
'use strict';

const insertionSort = require('./insertion_sort.js');

describe('insertion sort', ()=>{
  it('can sort array ', ()=>{
    let arr = [8,4,23,42,16,15];
    let result = [4,8,15,16,23,42];
    expect(insertionSort(arr)).toEqual(result);
  });
});
