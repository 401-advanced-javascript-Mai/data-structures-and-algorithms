/* eslint-disable indent */
let {leftJoin} = require('./leftJoin.js');
const HashTable = require('./hashtable.js');



describe('LeftJoin',()=>{
  it('  ',()=>{
    let hashmap1 = new HashTable(1024);
    let hashmap2 = new HashTable(1024);
    hashmap1.add('fond', 'enamored');
    hashmap1.add('wrath', 'anger');
    hashmap1.add('diligent', 'employed');
    hashmap1.add('outift', 'garb');
    hashmap1.add('guide', 'usher');
    hashmap2.add('fond', 'averse');
    hashmap2.add('wrath', 'delight');
    hashmap2.add('diligent', 'idle');
    hashmap2.add('guide', 'follow');
    hashmap2.add('flow', 'jam');
    let result = [ [ 'fond', 'enamored', 'averse' ],
    [ 'diligent', 'employed', 'idle' ],
    [ 'outift', 'garb', 'null' ],
    [ 'guide', 'usher', 'follow' ],
    [ 'wrath', 'anger', 'delight' ] ];
    expect(leftJoin(hashmap1,hashmap2)).toEqual(result);
  });
});