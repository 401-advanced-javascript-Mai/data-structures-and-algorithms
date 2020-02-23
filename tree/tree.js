


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


  postOrder() {
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

//////////////////// Binary serarch tree /////////////


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
    _search(this.root);
    return this.root;
  }

  //////////// check if the value exists /////////////
  contain(value){
    let findArray = [];

    let _find = (node) =>{
      if(node.value === value){return findArray.push(node.value);}

      if(node.value > value && node.left){
        _find(node.left);
      }


      if(node.value < value && node.right){
        _find(node.right);
      }

    };

    _find(this.root) ;


    if(findArray[0]){
      return true;
    }else{
      return false ;
    }

  }
}

module.exports = { BinaryTree, Node, BinarySearchTree };


