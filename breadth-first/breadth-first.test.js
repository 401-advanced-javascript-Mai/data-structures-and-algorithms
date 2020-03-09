'use strict ';

const {Node} = require('./breadth-first.js');
const {BinaryTree} = require('./breadth-first.js');
const {levelOrder} = require('./breadth-first.js');

describe('Breadth First()   Module:',()=>{
  it('Can successfully return a collection from a Breadth First traversal',()=>{
    // let one = new Node(10);
    // let two = new Node(9);
    // let three = new Node(8);
    // let five = new Node(7);
    // let six = new Node(6);
    // let seven = new Node(5);
    // let eight = new Node(4);

    // let tree = new BinarySearchTree();
    // tree.add(one);
    // tree.add(two);
    // tree.add(three);
    // tree.add(five);
    // tree.add(six);
    // tree.add(seven);
    // tree.add(eight);
    let tree = null;

    let one = new Node('A');
    let two = new Node('B');
    let three = new Node('C');
    let four = new Node('F');
    let five = new Node('D');
    let six = new Node ('E');
  
    one.left = two;
    one.right = three;
    three.left = four;
    two.left = five;
    two.right = six ;
  
    tree = new BinaryTree(one);
    // console.log(tree,'llllllllllll');
    //   [ 1, 7, 8, 4, 27, 27, 80 ]   [ 1, 7, 27, 8, 27, 80, 4 ]
    expect(levelOrder(tree)).toEqual([ [ 'A' ], [ 'B', 'C' ], [ 'D', 'E', 'F' ] ]);


  });
});