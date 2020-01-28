'use strict';


'use strict';

const Node = require('./node.js');

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0
    }

    //  here i do exactly like mr brin 
    // create new node 
    insert(value) {
        let node = new Node(value);
        // if it empty add it as head (be first item in link list ) 
        if (!this.head) {
            this.head = node;
            this.length++
            return this;
        } else {
            // console.log('iam not here') ;
            // let name = "mai ";
            // console.log("mai")
            // assign as a value

            // if  there any node please look to other one 
            // (keep look to the .next )
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            this.length++;
            // here where i want to append my node   
            currentNode.next = node;
            // this === newNode 
            return this;


        }
    }
    // }
    addkFromtoTheEnd(k) {

        let arr = []
        let currentNode = this.head;

        while (currentNode) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log (arr[arr.length-1-k])
        return arr[arr.length-1- k]


    }

}
let list = new LinkedList();


// list.insert(3);
list.insert(6);
list.insert(5);
list.insert(4);
list.insert(3);
list.insert(2);
// list.insert(1);
list.addkFromtoTheEnd(2)
// let newlist = list.insert();
// console.log('mylist', list)
// let str = list.toStringType();
// console.log(str);
// let value = 5
module.exports = LinkedList;
// module.exports = LinkedList;