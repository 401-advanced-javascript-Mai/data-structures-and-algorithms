const Linkedtest3 = require('../lib/ll-kth-from-end.js');
describe('Linked test3 Modulev(from the end ', () => {

  it('Return the node’s value that is k from the end of the linked test3.  ', () => {

    let test3 = new Linkedtest3();

    test3.insert(3);
    test3.insert(6);
    test3.insert(5);
    test3.insert(4);
    test3.insert(3);
        
    //  happy path
    expect(test3.addkFromtoTheEnd(1)).toEqual(4);
    //   k is a negative integer it will return undefiend 
    expect(test3.addkFromtoTheEnd(-1)).toEqual(undefined);
    // k greater than the length of linked list it will return undefiend 
    expect(test3.addkFromtoTheEnd(6)).toEqual(undefined);
    // k have the same length of the llinked list it will return undefiend 
    expect(test3.addkFromtoTheEnd(5)).toEqual(undefined);


  });
  it(' linked list with size one so undefiend is the expected value  to reurn a value ',()=>{
    let test3 = new Linkedtest3();
    test3.insert(1);
    expect(test3.addkFromtoTheEnd(1)).toEqual(undefined);
  });
});