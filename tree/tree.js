'use strict';


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
    //  recorseve function our recursive fubtion 
        let _walk = (node) => {
         // read the node value  and add it to our results array  
          results.push(node.value);
        //   if that node has left  then we walked with node to left
          if (node.left) _walk(node.left);
          if (node.right) _walk(node.right);
        }
        /// start there _ intial firing _ 
        _walk(this.root);
        return results;
      }
    
      inOrder() {
        let results = [];
    
        let _walk = (node) => {
          if (node.left) _walk(node.left);
          results.push(node.value);
          if (node.right) _walk(node.right);
        }
        _walk(this.root);
        return results;
      }
    

    postOrdee(){

    }

  }
