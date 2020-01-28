const Linkedtest3 = require('../lib/ll-kth-from-end.js');
describe('Linked test3 Modulev(from the end ', () => {

    it('Return the node’s value that is k from the end of the linked test3.  ', () => {

        let test3 = new Linkedtest3();

        test3.insert(3);
        test3.insert(6);
        test3.insert(5);
        test3.insert(4);
        test3.insert(3);
        

        expect(test3.addkFromtoTheEnd(0)).toEqual(3);
        expect(test3.addkFromtoTheEnd(2)).toEqual(5);
        expect(test3.addkFromtoTheEnd(6)).toEqual(undefined);
    });
});