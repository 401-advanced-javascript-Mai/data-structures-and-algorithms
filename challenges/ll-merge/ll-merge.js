/* eslint-disable no-redeclare */
/* eslint-disable no-undef */
/* eslint-disable no-console */
'use strict' ;

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

  mergeLists(a, b) {
    // check if a , b are linked lists or at  least one  is linked list
    if (typeof a !== 'object' || typeof b !== 'object'){
      console.error('they are not linked list ');
      throw new Error('they are not linked list');

    }
    // let z = new LinkedList ;
    let currentA = a.head;
    let currentB = b.head;

    while (currentA || currentB) { /// which mean there still node
      if (currentA) {
        this.append(currentA.value);
        currentA = currentA.next;
      }

      if (currentB) {
        this.append(currentB.value);
        currentB = currentB.next;
      }
    }
    return this;
  }
}

//  a ,b are linked list
// mergelist(a,b){
//     // checj if a is llinked list or be is linked list at least
// if (typeof a !== 'object' || typeof b !== 'object'){
//     console.error('they are not linked list ');
// }

//   let currentA = a.head ;
//   let currentA = b.head
// // mayne one of the linked list are empty so we will take the other to be the head
// if (!currentA){
//     return curruentB
// }else if (!currentB){
//     currentA
// }
// // a  1 >>> 2 >>> 3 >>>
// // b  m >>> a >>> i >>>
// while (currentA.next && currentB.next ) {
//     // 1 = btt b as ahead
//     // 1 >> m
//     a.head = currentA.next ;
//     // but the  >next of 1
//     currentA.next = currentB.next ;
//     currentB.next = currentA ;
//     currentB = currentA.next ;
//     currentA = a.head

// }
// if (currentB){
//     currentA.next = currentB;

// }
// return a.head
// }


module.exports = LinkedList;
