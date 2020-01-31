'use strict ';
const LinkedList = require('./insert.js');


describe('Linked List Module', () => {

  it('Should insert a value into the linked list at the end use append()', () => {
    let list1 = new LinkedList();
    list1.append('lovely mai');
    expect(list1.head.value).toEqual('lovely mai');
    list1.append('great job');
    expect(list1.head.value).toEqual('lovely mai');// after second insert the same head
    expect(list1.length).toEqual(2);
  });

  it('insertBefore()>> should insert anew value before dertin value ', () => {
    let list2 = new LinkedList();
    list2.append('A');
    list2.append('b');
    list2.append('c');
    list2.insertBefore('b','done');
    let str = list2.toStringType();
    expect(str).toBe( '{ A } --> { done } --> { b } --> { c } --> NULL');

    // expect(LL.toString()).toMatch("1 -> test -> 2 -> 3 -> NULL")
  });

  it('insertAfter()>> should insert anew value After certin value ', () => {
    let list3 = new LinkedList();
    list3.append('A');
    list3.append('b');
    list3.append('c');
    list3.insertAfter('b','done');
    let str = list3.toStringType();
    expect(str).toBe( '{ A } --> { b } --> { done } --> { c } --> NULL');
    list3.append('too hard');
    // list3.insertAfter('c','too hard') ;
    // let str2 = list3.toStringType();
    // expect(str2).toBe('{ A } --> { b } --> { c } --> { too hard } --> NULL');
  });

});