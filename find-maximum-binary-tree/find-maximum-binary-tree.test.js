/* eslint-disable strict */
'use strict';

const  {findMaximumValue} = require('./find-maximum-binary-tree.js');
const {Node} = require('./find-maximum-binary-tree.js');
const {BinaryTree} = require('./find-maximum-binary-tree.js');



describe('find maximum value in the  BinaryTree', () => {

  let tree = null;

  let one = new Node(2);
  let two = new Node(7);
  let three = new Node(5);
  let four = new Node(9);
  let five = new Node(6);
  let six = new Node (2);

  one.left = two;
  one.right = three;
  three.right = four;
  two.left = five;
  two.right = six ;

  tree = new BinaryTree(one);

  it('findMaximumValue()', () => {
    expect(findMaximumValue(tree)).toEqual(9);

  });

});