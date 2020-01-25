'use strict' ;
let binary =module.exports ;


let array = [ 1 ,2 ,30 , 4 ,80, 17, 25 ];

binary.sorted = function(array){

 return array.sort((a,b)=>a-b);
}
//  console.log('binary.sorted(array)'
//  , binary.sorted(array)
//  );
// console.log('sorted' , sorted) ;
// binary.sorted(array)
 
 binary.binarySearch = function  (arr, value){
     let arrSorted = binary.sorted(arr);
     console.log('arr', arrSorted)
    let highIndex = arrSorted.length -1 ;
    let lessIndex =0 ;
    let midPoint=0 ; 
    // as it less and we can look through it 
    while( lessIndex <=highIndex){
        // to get the middle value using middle index
        let midPoint= Math.floor((lessIndex + highIndex)/2) ;
// if the middle equal what we look for it it will be return     
   if (arrSorted[midPoint] === value ){
        return midPoint ;
        // return arr[midpoint] // if i want to return the value not the index
        /// if the value greater than what shoud be increase the less index 1
    } else if (value >arrSorted[midPoint]){
        lessIndex = midPoint+1 ;
        //else which mean less 
    }else {
        highIndex = midPoint -1
    }
    }
// console.log (arr[midPoint])
return -1
    }


//  binarySearch(array,3)
 console.log('binarySearch(array,69)',binary.binarySearch(array, 17
    ))



//  function binarySearch2 (array , value){
//      for (var i =0 ; i<array.length ; i++){
//          if (array[i] === value){
//              return i
//          }
//      }
//      return -1
//  }
//  console.log('binarySearch2' ,binarySearch2(array, 30) )
