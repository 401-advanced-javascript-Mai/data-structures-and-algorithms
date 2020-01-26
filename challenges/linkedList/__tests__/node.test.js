'use strict' ;

const Node = require('../lib/node.js')

describe('node module' , ()=>{
    it (' Node{} is constructor ',() =>{

        let value =' lovely mai' ;
        let test = new Node(value);

        // let test = new Node(value);
        expect(test.value).toEqual(value)
        expect(test.next).toBeNull()
})
})