'use strict ';

let Hashmap = require('./hashtable.js');

describe('implement hashMap ', () => {
  it('set() item to hashmap ', () => {
    let hashmap = new Hashmap(1024);
    hashmap.set('mai', 'developer');
    hashmap.set('yassir', 'doctor');
    expect(hashmap.map[hashmap.hash('mai')].head.value).toEqual({ 'mai': 'developer' });
  });
  it('contain() ... "find"  item in hashmap ', () => {
    let hashmap = new Hashmap(1024);
    hashmap.set('mai', 'developer');
    hashmap.set('yassir', 'doctor');
    expect(hashmap.contains('mai')).toBeTruthy();
  });

  it('get() return the value of the key in hashmap ', () => {
    let hashmap = new Hashmap(1024);
    hashmap.set('mai', 'developer');
    hashmap.set('yassir', 'doctor');
    expect(hashmap.get('yassir')).toEqual(['doctor']);
  });

  it('hash() the key and return anumber  ', () => {
    let hashmap = new Hashmap(1024);
    hashmap.hash('mai');
    expect( typeof hashmap.hash('mai')).toBe('number');
  });
});