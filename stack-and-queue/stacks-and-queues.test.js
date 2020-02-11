/* eslint-disable no-undef */
'use strict';

const  { Stack , Queue,} = require('./stacks-and-queues.js');

describe('Stack', () => {
  it(' push() ..... should push an item', () => {
    let stack = new Stack();
    expect(stack.peek()).toBeNull();
    stack.push('a');
    expect(stack.top.value).toEqual('a');
    stack.push('b');
    expect(stack.top.value).toEqual('b');
  });

  it(' pop() ..... should return the top item and remove it', () => {
    let stack = new Stack();
    stack.push('a');
    stack.push('b');
    stack.push('c');
    let item = stack.pop();
    expect(item).toEqual('c');

  });
  it('peek() ....... should return the top of stack', () => {
    let stack = new Stack();
    stack.push('mai');
    expect(stack.top.value).toEqual('mai');
  });
  it('should return false if the stack is empty ' , ()=>{
    let stack = new Stack();
    stack.push('mai');
    stack.pop();
    expect(stack.isEmpty()).toEqual(true)
  })
});



describe('Queue', () => {
  it(' enqueue() ..... should add an item', () => {
    let queue =  new Queue();
    expect(queue.peek()).toBeNull();
    queue.enqueue('a');
    expect(queue.rare.value).toEqual('a');
    queue.enqueue('b');
    expect(queue.rare.value).toEqual('b');
    expect(queue.front.value).toEqual('a');

  });

  it(' dequeue() should return the front item and remove it', () => {
    let queue =  new Queue();
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    // console.log('queue', queue);
    let item = queue.dequeue();
    expect(item).toEqual('a');
    expect(queue.front.value).toEqual('b');

  });
  it(' peek() ...... should return the front of queue', () => {
    let queue =  new Queue();
    queue.enqueue('mai');
    expect(queue.front.value).toEqual('mai');
  });
});