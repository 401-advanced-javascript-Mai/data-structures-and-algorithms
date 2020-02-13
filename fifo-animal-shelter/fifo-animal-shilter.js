/* eslint-disable no-unused-expressions */
'use strict ';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class AnimalShelter {
  constructor() {
    this.front = null,
    this.end = null;
  }
  enqueue(animal) {
    //  here i got help to solve problem that i was or and itmust be and from my college abd alrhman
    if (animal !== 'dog' && animal !== 'cat') {
      // console.log('hii')
      return null;
    }
    let node = new Node(animal);

    if (this.end) {
      this.end.next = node;
    } else {
      this.end = node;
    }
    if (!this.front) {
      this.front = node;
    }
    // this.end = node;

  }
  dequeue(pref) {
    if (pref !== 'dog' && pref !== 'cat') {
      return null;
    }
    let current = this.front;
    if (!current) {
      return null;
    }
    if (!current.next) {  //// means it have one node
      if (current.value === pref) {
        this.front = null;
        this.back = null;
        return current.value;
      }
      else {
        return null;
      }
    }
    if (current.value === pref) {
      this.front = current.next; ////// here if the front have information about pref
      return current.value;
    }
  }
}

// let list = new AnimalShelter();
// list.enqueue('dog')
// list.dequeue('dog')

// console.log('list', list)

// module.exports = AnimalShelter
module.exports = AnimalShelter ;
