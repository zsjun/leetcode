/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
export default (A, B) => {
  let count;
  let max;
  let res = [];
  let hashTable = {};
  arrB = B.split('');
  let setB = new Set(arrB);
  for (let key of setB) {
    max = -1;
    for (let item of B) {
      count = 0;
      for (let i = 0; i < item.length; i++) {
        if (key === item[i]) {
          count++;
        }
        if (count > max) {
          max = count;
        }
      }
    }
    hashTable[key] = max;
  }
  for (let key in hashTable) {
    count = 0;
    for (let i = 0; i < A.length; i++) {
      count = 0;
      if (A[i].includes(key)) {
        for (let j = 0; j < A[i].length; j++) {
          if (A[i][j] === key) {
            count++;
          }
        }
        if (count < hashTable[key]) {
          A[i] = '';
        }
      } else {
        A[i] = '';
      }
    }
  }

  A.map(function (val) {
    if (val !== '') {
      res.push(val);
    }
  });
  return res;
};
