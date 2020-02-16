


class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
//  data >> left >> read
//   read the data in the left if not there read from right
class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }


  preOrder() {
    let results = [];
    // console.log("ewsult" , results)
    //  recorseve function our recursive fubtion
    let _walk = (node) => {
      // read the node value  and add it to our results array
      results.push(node.value);
      ///here the recursion
      //   if that node has left  then we walked with node to left
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };
    /// start there _ intial firing _ (invoke)
    _walk(this.root);
    return results;
  }

  inOrder() {
    let results = [];

    let _walk = (node) => {
      if (node.left) _walk(node.left);
      results.push(node.value);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }


  postOrder(){
    let results = [];

    let _walk = (node) => {
      if (node.left) _walk(node.left);
      // results.push(node.value);
      if (node.right) _walk(node.right);
      results.push(node.value);

    };
    _walk(this.root);
    return results;
  }
}

// let tree = null;

// let one = new Node("A");
// let two = new Node("B");
// let three = new Node("C");
// let four = new Node("F");
// let five = new Node("D");
// let six = new Node ("E")

// one.left = two;
// one.right = three;
// three.left = four;
// two.left = five;
// two.right = six ;

// tree = new BinaryTree(one);

// console.log ('tree' , tree.preOrder() )
// console.log ('tree' , tree.inOrder() )
// console.log ('tree' , tree.postOrder() )


class BinarySearchTree {
  constructor(root = null){
    this.root = root;
  }

  add (value){
    let newNode = new Node (value);
    // console.log('hi')

    if (this.root === null) {
      // console.log('muna');
      this.root = newNode;
      return this.root;
    }

    let _search = (node)=>{
      if(node.value > value){
        if (!node.left){
          // console.log('mai')
          return node.left = newNode ;

        }else{
          _search(node.left);
        }
      }

      if (node.value < value){
        if (!node.right){
          // console.log('hi')
          return node.right = newNode ;
        }else{
          _search(node.right);

        }

      }
    };
    _search(this.root);
    return this.root;
  }

  find(value){
    let currentNodeInTheTree = this.root ;
    while(currentNodeInTheTree){
      if(value === currentNodeInTheTree.value)
        return true ;
      if (value < currentNodeInTheTree.value){
        currentNodeInTheTree = currentNodeInTheTree.left ;
      }else{
        currentNodeInTheTree = currentNodeInTheTree.right;
      }
      return false;
    }
  }
}

module.exports = { BinaryTree, Node, BinarySearchTree };


// let tree = null;
//   tree = new BinarySearchTree();

//  tree.add(5);
//  tree.add(4);
//  tree.add(49);
//  tree.add(19);
//  tree.add()
//  console.log ('tree' , tree.find(4) )
//  console.log('binary serach tree' ,new  BinarySearchTree(100))
//  console.log('binary serach tree' ,new  BinarySearchTree(50))

// let one = new Node(10);
// let two = new Node(9);
// let three = new Node(8);
// let four = new Node(5);
// let five = new Node(4);
// let six = new Node (2)

// one.left = two;
// one.right = three;
// three.left = four;
// two.left = five;
// two.right = six ;

// tree2 = new BinarySearchTree()
// console.log ('tree' , tree.inOrder() )
// console.log ('tree' , tree.postOrder() )


