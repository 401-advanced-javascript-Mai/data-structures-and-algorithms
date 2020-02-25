

const mergeSort = require('./mergeSort.js');

describe('Merge  sort', ()=> {

  it('Return sorted array', () => {
    let inputArray = [8,4,23,42,16,15];
    let resultArray = [4,8,15,16,23,42];
    expect(mergeSort(inputArray)).toEqual(resultArray);
  });
});