'use strict' ;

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  append(value){
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.length++;
      return this;
    } else {

      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      this.length++;
      currentNode.next = node;
      return this;

    }
  }

  palindrome(list){
    if (!this.head || !this.head.next){
      console.log('it has no node or single node ');
      return false ;
    }else {
      let currentNode = this.head ;
      let arr = [];
      let i = 0 ;
      while (currentNode){
        arr[i] = currentNode ;
        currentNode = currentNode.next ;
        i++ ;
      }
      // let  arr1 = arr ;
      let arr2 = arr.slice().reverse() ;
      
      
      console.log('arr', arr);
      console.log('arr2', arr2);
      let j = 0 ;
      while ( j < arr.length) {
        if (arr[j] != arr2[j]){
          j++;
          return false;

        }
        console.log(true);
        return true;
      }

    }

  }
}
let test3 = new LinkedList();

test3.append(3);
test3.append(2);
test3.append(5);
test3.append(6);
test3.append(3);

// test3.palindrome();
console.log('result',test3.palindrome() );
module.exports = LinkedList;
