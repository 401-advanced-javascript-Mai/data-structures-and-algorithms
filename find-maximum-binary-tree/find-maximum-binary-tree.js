
//// note binary tree and node method for help me test my work and built tree

function findMaximumValue(tree) {
  let temp = tree.root.value;

  let _walk = (node) => {
    if (node.value > temp){
      temp = node.value;
    }

    if (node.left) _walk(node.left);
    if (node.right) _walk(node.right);
  };

  _walk(tree.root);
  return  temp ;
}


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


}

module.exports = { BinaryTree, Node, findMaximumValue };

// let tree = null;

// let one = new Node(2);
// let two = new Node(7);
// let three = new Node(5);
// let four = new Node(9);
// let five = new Node(6);
// let six = new Node (2);

// one.left = two;
// one.right = three;
// three.left = four;
// two.left = five;
// two.right = six ;

// tree = new BinaryTree(one);
// console.log(tree)
// console.log(findMaximumValue(tree))
// findMaximumValue(tree)