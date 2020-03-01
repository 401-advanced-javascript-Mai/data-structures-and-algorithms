/* eslint-disable new-cap */
/* eslint-disable no-undef */
'use strict ';

const {split} = require('./repeated-word.js');
const {PrintrepeatedWord} = require('./repeated-word.js');

describe('split() method', ()=>{
  it('split string to words(as string) in array',()=>{
    let string = 'lovely mai and muna ';
    let expected = ['lovely' , 'mai' , 'and' , 'muna', ''];
    expect(split(string, ' ')).toEqual(expected);
  } );
});

describe('PrintrepeatedWord ()', ()=>{

  it('return null if there only one char or in empty string ', ()=>{
    let string = 'l';
    expect(PrintrepeatedWord(string)).toBeNull();
  });
  it('return the repeated word in the string ', ()=>{
    let string = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
    expect(PrintrepeatedWord(string)).toEqual('IT');
  });

});
