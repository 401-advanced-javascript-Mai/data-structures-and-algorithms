
'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(val) {
    const node = new Node(val); // create a new node
    // console.log(node);
    node.next = this.top; // node.next = null;
    this.top = node; // reassign the stack's top to the new node
  }


  pop() {
    let top;
    if (this.top.next) {
      top = this.top;
      this.top = this.top.next;
    } else if (this.top) {
      top = this.top;
      this.top = null;
    } else {
      return null;
    }
    return top.value;  ///// it return the value of pop item
  }

  peek() {
    if (this.top) {
      return this.top.value;
    }
    return null;
  }
}
module.exports = {Stack , Node}