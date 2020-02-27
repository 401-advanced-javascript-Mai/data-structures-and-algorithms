'use strict ';

const Node = require('./breadth-first.js');
const BinarySearchTree = require('./breadth-first.js');
const breadthFirst = require('./breadth-first.js');

describe('Breadth First()   Module:',()=>{
  it('Can successfully return a collection from a Breadth First traversal',()=>{
    let one = new Node(1);
    let two = new Node(27);
    let three = new Node(7);
    let five = new Node(8);
    let six = new Node(4);
    let seven = new Node(27);
    let eight = new Node(80);

    let tree = new BinarySearchTree();
    tree.add(one);
    tree.add(two);
    tree.add(three);
    tree.add(five);
    tree.add(six);
    tree.add(seven);
    tree.add(eight);
    // console.log(tree.preOrder(),'llllllllllll');
    //   [ 1, 7, 8, 4, 27, 27, 80 ]   [ 1, 7, 27, 8, 27, 80, 4 ]
    expect(breadthFirst(tree)).toEqual([ 1, 7, 27, 8, 27, 80, 4 ]);


  });
});