'use strict';
let  LinkedList 
    = require('../lib/linkedList.js') ;



describe(' LinkedList Module  insert() ', () => {

    it(' LinkedList Constructor it is empty  ', () => {

        let testLL = new LinkedList();
        expect(testLL.head).toEqual(null);
    });

    it('linledlist constructor add a value ', ()=>{
        let value = "lovely"
        let test2 = new LinkedList() ;
        // console.log('test2' , test2)
          test2.insert(value)
        //   console.log(' test2.insert(value)', test2.insert(value) )
        expect(test2.head.value).toEqual('lovely')
    })

    it('The head property will properly point to the first node in the linked list ' , ()=>{
        let value = 'lovely';
        let test2 = new LinkedList() ;
        // console.log('test2' , test2)

        test2.insert(value) ;
        // console.log(' test2.insert(value)', test2.insert(value) )

        expect(test2.length).toEqual(1)

    })
});


describe(' LinkedList Module  include() ', () => {
    it ('Will return true when finding a value within the linked list that exists',()=>{
        let value = "cute" ;
        let test2 = new LinkedList();
        test2.insert(value);
        let otherValue = "cute" ;
        // test2.includes(otherValue) ;
        expect(test2.includes(otherValue)).toBeTruthy() ;

    })
    it ('Will return false when searching for a value in the linked list that does not exist',()=>{
        let value = "cute" ;
        let test2 = new LinkedList();
        test2.insert(value);
        let otherValue = "lovely" ;
        // test2.includes(otherValue) ;
        expect(test2.includes(otherValue)).toBe(false) ;

    })


})

describe(' LinkedList Module  include()', ()=>{
    it ('show the result like  // arr  = { a } --> { b } --> { c } --> NULL',()=>{
        let list = new LinkedList();
list.insert(5);
list.insert(3);
list.insert(2);
let str = list.toStringType();
expect(str).toBe( '{ 5 } --> { 3 } --> { 2 } --> NULL')
     // arr  = { a } --> { b } --> { c } --> NULL
    })

} )