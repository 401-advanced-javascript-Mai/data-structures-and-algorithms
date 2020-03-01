/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
'use strict ';

function PrintrepeatedWord(string){
  let temp;
  let count = 0;
  const wordsUpper = string.toUpperCase();
  const words = split(wordsUpper, ' '); /// array of upper case of words(string).

  if(words.length <= 1) return null; //// if there only one charachters .

  while(count < words.length){
    temp = words[count];
    for(let i = count + 1 ; i < words.length; i++){ ///// here to compare the first word with all other word in string
      if(temp === words[i]) return temp;
    }
    count++;
  }
}

function split(string, space) {
  const stringArray = [''];//// array that will have sttring for each word
  let wordIndex = 0;

  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === space) {
      wordIndex++;
      stringArray.push('');//// when we have space push empty string to hold the new word
    } else {
      stringArray[wordIndex] += string.charAt(i); /// push each charcharters in the word
    }
  }
  return stringArray;
}


module.exports = {split, PrintrepeatedWord} ;
