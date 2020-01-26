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
            //  this help get out  of the nose 
            // help get out frm infinety loop 
            //  i got help in this from my freind Ahmad 
            return  this;
        }else{
        console.log('iam not here') ;
        let name = "mai ";
        console.log("mai")
        // assign as a value
        let currentNode = this.head;

        // if  there any node please look to other one 
        // (keep look to the .next )
        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        // here where i want to append my node   
        currentNode.next = node;
        this.length++ ;
        // this === newNode 
        return this;
      }
    }
    
    
    includes(value) {
        
        // let newNode = new Node(value);
        
        // if (!this.head) {
        //     this.head = newNode;
        // }
        
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                currentNode = currentNode.next;
                return true;
            }
            return false;
        }
        
    }  
    

    toStringType() {// "{ a } -> { b } -> { c } -> NULL"
        let currentNode = this.head;
        let arr = [], str = '';
        while (currentNode) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
            // currentNode.value += str;// str = 'abc'
        }
        // arr  = ['{ a }', '{ b }', c]
        return arr.map(val => `{ ${val} }`).join(' --> ').concat(` --> NULL`);
        // arr  = ['{ a }', '{ b }', '{ c }']
        // arr  = { a } --> { b } --> { c } --> NULL


        // currentNode = String(currentNode);
        
    } 
    
}


let list = new LinkedList();
list.insert(5);
list.insert(3);
list.insert(2);
let str = list.toStringType();
console.log(str);
// let value = 5
module.exports=  LinkedList 
    ;
// module.exports = LinkedList;