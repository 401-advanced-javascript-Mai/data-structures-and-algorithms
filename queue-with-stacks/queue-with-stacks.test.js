/* eslint-disable no-undef */
'use strict' ;
let PseudoQueue = require('./queue-with-stacks.js');

describe(' PseudoQueue () ', ()=>{
  it('can enqueue an item ', ()=>{
    let list = new PseudoQueue;
    list.enqueue(1);
    // console.log(list);
    expect(list.newQueue1.top.value).toEqual(1);
  });
  it('can enqueue some items ', ()=>{
    let list = new PseudoQueue;
    list.enqueue(1);
    list.enqueue(2);
    // console.log(list);
    expect(list.newQueue1.top.value).toEqual(2);
  });
  it('can dequeue an item ', ()=>{
    let list = new PseudoQueue;
    list.enqueue(1);
    list.enqueue(2);
    // console.log(list);
    expect(list.dequeue()).toEqual(1);
  });
});




