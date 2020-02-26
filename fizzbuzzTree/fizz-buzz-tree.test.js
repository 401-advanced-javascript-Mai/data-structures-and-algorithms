/* eslint-disable strict */
'use strict';

let {Node} = require('./fizz-buzz-tree.js');
let {BinaryTree} = require('./fizz-buzz-tree.js');
let {fuzzBuzz} = require('./fizz-buzz-tree.js');

describe('fuzzBuzz()', ()=>{


  let tree = null;

  let one = new Node(15);
  let two = new Node(5);
  let three = new Node(3);
  let four = new Node(8);
  let five = new Node(7);
  let six = new Node (17);

  one.left = two;
  one.right = three;
  three.left = four;
  two.left = five;
  two.right = six ;

  tree = new BinaryTree(one);

  it('replace num devide by 15 with fuzzbuzz ' ,()=>{
    let result = fuzzBuzz(tree);
    expect(result.root.value).toEqual('fuzzBuzz');
  });

  it('replace num devide by 5 with buzz ' ,()=>{
    let result = fuzzBuzz(tree);
    console.log('result', result);
    expect(result.root.left.value).toEqual('Buzz');
  });

  it('replace num devide by 3 with fuzz ' ,()=>{
    let result = fuzzBuzz(tree);
    expect(result.root.right.value).toEqual('Fuzz');
  });

  it('replace num that not devide by 15 or 5 or 3 with the string ' ,()=>{
    let result = fuzzBuzz(tree);
    expect(result.root.left.right.value).toEqual('17');
  });
});

