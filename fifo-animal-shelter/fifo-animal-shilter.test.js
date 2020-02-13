/* eslint-disable no-undefined */


const  AnimalShelter =  require('./fifo-animal-shilter.js') ;

describe(' animal sheler class work with first in first out ' , ()=>{
  it(' can enqueue inside animak=l shelter if it cat or dog just ' , ()=>{
    let list =  new AnimalShelter;
    list.enqueue('cat');
    expect(list.front.value).toBe('cat');
  });
  it (' should return null when the value is not cat or dog ' , ()=>{
    let list = new AnimalShelter;
    list.enqueue('snake');
    expect(list.front).toBeNull();
  });
  it(' can dequeue an item from  the front if it equal to the pref ' , ()=>{
    let list =  new AnimalShelter;
    list.enqueue('cat');
    list.enqueue('dog');
    expect(list.dequeue('cat')).toBe('cat');
  });
  it(' should not dequeue an item from  the front if it not  equal to the pref ' , ()=>{
    let list =  new AnimalShelter;
    list.enqueue('cat');
    list.enqueue('dog');
    // console.log(list)
    expect(list.dequeue('dog')).toBe(undefined);
  });
});