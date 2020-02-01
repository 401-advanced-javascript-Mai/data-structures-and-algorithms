/* eslint-disable no-undef */
'use strict' ;
const LinkedList = require ('./ll-merge.js');


describe('“Happy Path” - Expected outcome', () => {
  it('should merge two linked lists of equal, non-zero lengths', () => {
    const a = new LinkedList();
    a.append(1);
    a.append(3);
    const b = new LinkedList();
    b.append(2);
    b.append(4);
    let z = new LinkedList();

    z.mergeLists(a, b);
    expect (z.head.value).toBe(1);
    expect (z.head.next.value).toBe(2);
    expect (z.head.next.next.value).toBe(3);
    expect (z.head.next.next.next.value).toBe(4);
  });
}) ;

describe('Expected failure', () => {
  it('should console an error if `a` and `b` are not objects', () => {
    const b = new LinkedList();
    const a = '' ;

    expect(() =>mergeLists(a, b)).toThrow( );
  });
});