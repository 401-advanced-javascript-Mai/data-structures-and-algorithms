/* eslint-disable no-undef */
'use strict' ;

const mocks = require('./mock-interview.js');


describe('matrix sum ' ,()=>{
  it('sumRow() take array as input make sumassion and return array with apporiprate length ', ()=>{

    let array = [[1,2,3],[4,5,6],[7,8,9]] ;
    expect(mocks.sumRow(array)).toEqual([6 ,15 ,24]);
    expect((mocks.sumRow(array)).length).toEqual( 3);

  } );
});

describe(' fibonacci number ' ,()=>{
  it('mocks.fibonacci() will take number and give the sum of two sum of the previous and so on   ', ()=>{

    let value = 5;
    expect(mocks.fibonacci(value)).toEqual(5);

  } );
  it( 'mocks.calculate () will take number and give the sum of two sum of the previous and so on' , ()=>{
    let value = 5;

    expect(mocks.calculate(value)).toEqual(5);
  });
});