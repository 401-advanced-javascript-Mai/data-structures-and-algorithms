'use strict';

/////////////////////// first ptoblem //////////////////////////
function sumRow(array){
  let sum =0;
  let tempArr=[];
  console.log(array,tempArr)
  for(let i=0;i<array.length;i++){
         for(let j=0;j<array[i].length;j++){
      console.log('array[j]',array[i][j])
      sum=sum+array[i][j];
      console.log('sum', sum)
    }
    tempArr.push(sum);
  }
return tempArr;
}

///////////////////////// problem ////////////////////// 


let array = [0,1] ;
function calculate(n) {
for (let i=2 ; i<=n; i++ ){
  array.push(array[i-1]+ array[i-2]) ;
// console.log('muna' , muna)
}
return array;
}
calculate(5)