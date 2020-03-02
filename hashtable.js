'use strict ';

class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }
  // Add new node to the head
  add(data){
    let node = new Node(data);
    if(!this.head){//empty linked list
      this.head = node;
    }
    else{
      node.next = this.head;
      this.head = node;
    }
  }

}

class HashTable{
  constructor(size){
    this.size = size;
    this.map = new Array(size);
  }

  hash(key){
    // takes in an arbitrary key and returns an index in the collection
    let  asciSum = 0;
    for (let i = 0; i < key.length; i++) {
      asciSum = asciSum + key.charCodeAt(i);
      // console.log( typeof asciSum, asciSum)
    }
    // console.log('sum',asciSum * 5 % this.size);
    return asciSum * 5 % this.size;
  }

  add(key, value){
    // console.log (value, key )
    /*
       : takes in both the key and value.
        This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
        */

    let hashedKey = this.hash(key);
    // console.log(hashedKey)
    if(!this.map[hashedKey]){
      let ll =  new LinkedList();
      ll.add([key,value]);
      this.map[hashedKey] = ll;
    }
    else{
      this.map[hashedKey].add([key,value]);
    }

  }

  get(key){
    //  takes in the key and returns the value from the table.
    let hash = this.hash(key);
    let mapIndex = this.map[hash];
    if(!mapIndex){return null;}
    let current = mapIndex.head;
    while(current){
      if (current.val[0] === key){return current.val[1];}
      current = current.next;
    }
  }

  contains(key){
    //takes in the key and returns a boolean, indicating if the key exists in the table already.
    let hash = this.hash(key);
    let mapIndex = this.map[hash];
    if(!mapIndex){return false;}
    let current = mapIndex.head;
    while(current){
      if (current.val[0] === key){return true;}
      current = current.next;
    }

    return false;

  }
}


module.exports = HashTable;