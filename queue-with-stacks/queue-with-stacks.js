
'use strict';
let{Stack} = require('./stack.js')
let dequeueArray = [];

class PseudoQueue{
    constructor(){
        this.newQueue = new Stack ;
        
    }
    
    enqueue(value){
        this.newQueue.push(value)
    }
    
    dequeue(){
        this.newQueue.pop()
        while(this.newQueue.length !== 0 ){
     dequeueArray.push(this.newQueue.pop());
    }
}
}

let list = new PseudoQueue;
list.enqueue(1)
list.enqueue(2)
list.enqueue(3)
console.log('list1', list)

list.dequeue()
console.log ("list.dequeue",list.dequeue())
console.log('list2', list)
console.log('array', dequeueArray)

//  note for me when give stack not constractor just but the variable in an object