/* eslint-disable no-unused-vars */
'use strict ';
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }


  preOrder() {
    let results = [];
    let _walk = (node) => {
      results.push(node.value);

      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };
  }
}

function fuzzBuzz(tree){
  let _walk = (node) => {
    if (node.value % 3 === 0 && node.value % 5 === 0){
      node.value = 'fuzzBuzz';

    }else if (node.value % 5 === 0){
      node.value = 'Buzz';

    }else if ( node.value % 3 === 0){
      node.value = 'Fuzz';

    }else{
      node.value = `${node.value}` ;
    }
    if (node.left) _walk(node.left);
    if(node.right) _walk(node.right);
  };
  _walk(tree.root);
  return tree;
}
module.exports = { Node, BinaryTree ,fuzzBuzz };
