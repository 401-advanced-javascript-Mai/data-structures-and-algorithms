
'use strict ';
module.exports = function breadthFirst(tree){

  let temp = [] ;
  let result = [] ;
  if(tree.root === null){ return null ;}

  temp.push(tree.root);

  while(temp.length !== 0){

    for(let i = 0 ; i < temp.length ; i++){

      let current = temp.shift();
      result.push(current.val);
      if(current.left){temp.push(current.left);}
      if(current.right){temp.push(current.right);}
    }
  }
  return result ;

};


//////////////////////// this use for test
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }
  ///////////////// add value /////////////////
  add(value) {
    let newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this.root;
    }

    let _search = (node) => {
      if (node.value > value) {
        if (!node.left) {
          return node.left = newNode;

        } else {
          _search(node.left);
        }
      }

      if (node.value < value) {
        if (!node.right) {
          return node.right = newNode;
        } else {
          _search(node.right);

        }

      }
    };

  }
}
module.exports = { Node , BinarySearchTree};


