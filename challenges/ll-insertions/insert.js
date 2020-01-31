
const Node = require('./node.js');
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  append(value){
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.length++;
      return this;
    } else {

      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      this.length++;
      currentNode.next = node;
      return this;

    }
  }

  insertBefore(val,newvalue){
    let nodeToInsert = new Node (newvalue);
    // let previous ;
    let currentNode;

    //  if the linked list don't have any node
    if (!this.head){
      this.head =  nodeToInsert;
    }
    // if the value ==to the head
    currentNode = this.head ;
    if (currentNode.value === val){
      nodeToInsert.next = currentNode ;
      currentNode.next = nodeToInsert ;
      return this;
    }

    //  if the linked list not empty start from the head to search
    while (currentNode) {
    // while(currentNode.value !== value ){
      if (currentNode.next.value === val){
        nodeToInsert.next = currentNode.next ;
        currentNode.next = nodeToInsert ;
        break ;
      }
      currentNode = currentNode.next ;
    };
  }
}
//   insertAfter(value, newVal){
//     let currentNode;
//     let previousNode;

//     // empty
//     if (!this.head) {
//       this.head = new Node(newVal);
//     }

//     let newNode = new Node(newVal);
//     currentNode = this.head;//start from head
//     while (currentNode.value !== value) { //keep searching 
//       previousNode = currentNode;
//       currentNode = currentNode.next;
//     }
//     newNode.next = newNode ;
//     previousNode.next = currentNode ;

//     this.size++;

//   };

module.exports = LinkedList ;