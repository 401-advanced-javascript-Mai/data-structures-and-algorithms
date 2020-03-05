'use strict' ;

class Node {
    constructor(value){
        this.value = value ;
        this.next = null ;
    }
}


class LinkedList{
    constructor(){
        this.head = null ;
    }
add(value){
        let node = new Node(value);
        if (!this.head) {
          this.head = node;
          return  this;
        }else{

         let currentNode = this.head;
          while (currentNode.next) {
            currentNode = currentNode.next;
          }
          currentNode.next = node;
          return this;
        }
      }

read(){

    if(!this.head) console.log("The list is empty");
    else {
        let current = this.head;
        while(current){
            console.log(current.value);
            current = current.next;
        }
    }
  }
} 


class Hashmap {
    constructor(size){
        this.size = size ;
        this.map = new Array(size)
    }
hash(key){
    return key.toLowerCase().split('').reduce((acc, val)=>{
        return acc + val.charCodeAt(0);},0) *51 %this.size ;
    
}

set(key,value){
    let hashedKey = this.hash(key);
    if(!this.map[hashedKey]){
        let ll = new LinkedList();
        // console.log(`${key} :${value}`)
       let entery = { [key] : value}
        // let toAdd = {key : value}
        ll.add(entery)
        this.map[hashedKey] = ll ;
    }else{
        let entery = { [key] : value}
        this.map[hashedKey].add(entery)
    }
}

get(key){
    let hashedKey = this.hash(key);
    if(!this.map[hashedKey]){return null 
    }else{
        let current = this.map[hashedKey].head
        while(current){
            // console.log(Object.keys( current.value)[0])

    if (Object.keys(current.value)[0] === key){return Object.values(current.value);}
     current = current.next;

  }  
 }
}
 contains(key){
    let hashedKey = this.hash(key);
    if(!this.map[hashedKey]){return false}
    if (Object.keys(this.map[hashedKey].head.value)[0] === key){return true
    }else {
        return false
    } 


 
}



}
let hashmap = new Hashmap(1024);
hashmap.set('listen' , 'developer')
hashmap.set('silent' , 'doctor')
 console.log (hashmap.contains('silent'))





hashmap.map.forEach( (data, i) => {
    console.log(i);
    data.read();
})