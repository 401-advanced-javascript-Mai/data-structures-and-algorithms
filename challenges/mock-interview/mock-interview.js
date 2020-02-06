/* eslint-disable no-undef */
'use strict';
let mocks = module.exports = {};


/////////////////////// first problem //////////////////////////
mocks.sumRow = function(array){
  let tempArr = [];
  // console.log(array,tempArr);
  for(let i = 0;i < array.length;i++){
    let sum = 0;
    for(let j = 0;j < array[i].length;j++){
      // console.log('array[j]',array[i][j])
      sum = sum + array[i][j];
      // console.log('sum', sum)
    }
    tempArr.push(sum);
  }
  return tempArr;
};

/////////////////////////  ssecond problem //////////////////////


let array = [0,1] ;
mocks.calculate = function(n) {
  for (let i = 2 ; i <= n; i++ ){
    array.push(array[i - 1] + array[i - 2]) ;
    // console.log('muna' , muna)
  }
  return array[array.length - 2] + array[array.length - 3];
};
// mocks.calculate(5)


mocks.fibonacci = function(num){
  let a = 1 ;
  let b = 0 ;
  let temp = 1 ;
  while (num >= 1){
    temp = a;
    // console.log(temp);
    a = a + b;
    b = temp;
    // console.log (b)
    num--;
  }

  return b;
};
// mocks.fibonacci(5)