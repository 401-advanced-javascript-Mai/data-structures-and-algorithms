/* eslint-disable no-undef */

'use strict';
let { Stack, } = require('./stack.js');
// let dequeueArray = [];

class PseudoQueue {
  constructor() {
    this.newQueue1 = new Stack;
    this.newQueue2 = new Stack;

  }

  enqueue(value) {
    this.newQueue1.push(value);
  }

  dequeue() {
    while (!this.newQueue1.isEmpty()) {

      let popItem = this.newQueue1.pop();
      this.newQueue2.push(popItem);
    }

    return this.newQueue2.pop();
  }
}

// let list = new PseudoQueue;
// list.enqueue(1)
// list.enqueue(2)
// list.enqueue(3)

// console.log ("list.dequeue" ,list.dequeue())

module.exports = PseudoQueue;