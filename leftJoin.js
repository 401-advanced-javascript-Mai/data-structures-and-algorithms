'use strict ';

function leftJoin(hashmap1, hashmap2) {
  let leftJoin = [];


  for (let i = 0; i < hashmap1.size; i++) {
    // if (!hashmap1 || !hashmap2){return 'empty hashmap';}


    if (hashmap1.map[i]) {
      let key1 = hashmap1.map[i].head.val[0];
      let value1 = hashmap1.map[i].head.val[1];
      if (hashmap2.contains(key1)) {
        let value2 = hashmap2.get(key1);
        leftJoin.push([`${key1}`, `${value1}`, `${value2}`]);
      } else {
        leftJoin.push([`${key1}`, `${value1}`, `${null}`]);

      }

    }

  }
  return leftJoin;
}


module.exports = { leftJoin };
