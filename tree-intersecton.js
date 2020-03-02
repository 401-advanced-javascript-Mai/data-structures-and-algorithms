'use strict ' ;

let HashTable = require('./hashtable.js');

function treeInterSection (tree1 , tree2){
  let hashtable = new HashTable(1024);
  let interSection = [];
  if (!tree1 || !tree2){return 'empty tree'}

  let _walk = (node)=>{
       
    //   console.log(node.value , 'node');
    let key = node.value.toString();
    //   console.log(typeof key , 'key')
    //   let hashedKey = hashtable.hash(key);
    hashtable.add(key, node.value);
    // console.log('hashtable', hashtable)
    if(node.left){_walk(node.left);}
    if(node.right){_walk(node.right);}


  };
  _walk(tree1.root);
  // return hashtable ;

  let _walkToFind = (node) =>{
      console.log(node)
      let key = node.value.toString();

    if( hashtable.contains(key)){
        console.log('node.vlue', node.value)
      interSection.push(node.value);
    }
    if(node.left) {_walkToFind(node.left);}
    if(node.right) {_walkToFind(node.right);}

  };
  _walkToFind(tree2.root);
  return interSection ;
}

module.exports = {treeInterSection} ;
