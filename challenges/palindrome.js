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
      
  }

}

 module.exports = LinkedList;
