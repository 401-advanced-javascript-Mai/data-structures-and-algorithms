/* eslint-disable no-redeclare */
/* eslint-disable no-undef */
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

////////////////// queue

class Queue {
  constructor() {
    this.rare = null;
    this.front = null;
  }



  enqueue(val) {

    const node = new Node(val);
    node.next = this.rare;
    this.rare = node;
    if (!this.front) {
      this.front = node;
    }
  }

  dequeue() {
    let current = this.rare;
    // console.log('current', current);
    if (!current) {
      return null;
    }

    //// one item
    if (!current.next) {
      this.rare = null;
      this.front = null;
      return current.value;
    }

    while (current.next && current.next.next) {
      current = current.next;
    }
    const target = current.next;
    // console.log('target' ,target)
    // console.log('current.next', current.next)

    current.next = null;
    // console.log('current', current);
    // console.log('current.next2', current.next)
    this.front = current;
    // console.log('this.front', this.front)
    return target.value;
  }

  peek() {
    if (!this.front) {
      return null;
    }
    if (this.front) {
      return this.front.value;
    }
  }
}

module.exports = { Node, Stack, Queue, } ;
const test = new Stack();
test.push('a');
test.push('b');
test.push('c');
// console.log(test.pop());
// console.log(test);


// ///  test >>>> stack{ top : { value : 'a' , next : node { value :'b' next : node {value : 'c' , next: null }}}
// console.log ('test', test);


// const test2 = new Queue();
// test2.enqueue('m');
// test2.enqueue('a');
// test2.enqueue('i');


// ///  test2 >>>> queue{ rare  : { value : 'i' , next : node { value :'a' next : null {value : 'm' , next: null }}}
// //                     front : node  {value : 'm' , next: null }
// console.log ('test2', test2);
// console.log(test2.dequeue());
// console.log(test2.peek());
