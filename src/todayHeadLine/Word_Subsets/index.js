/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
const isSubset = (wordA, wordB) => {
  const map = new Map();
  for (let i = 0; i < wordA.length; i++) {
    if (map.has(wordA.charAt(i))) {
      const tempVal = map.get(wordA.charAt(i)) + 1;
      map.set(wordA.charAt(i), tempVal);
    } else {
      map.set(wordA.charAt(i), 1);
    }
  }
  // console.log(map)
  for (let i = 0; i < wordB.length; i++) {
    if (map.has(wordB.charAt(i))) {
      const val = map.get(wordB.charAt(i)) - 1;
      if (val <= 0) {
        map.delete(wordB.charAt(i));
      } else {
        map.set(wordB.charAt(i), val);
      }
    } else {
      return false;
    }
  }
  return true;
};
export default (A, B) => {
  const res = [];
  for (let i = 0; i < A.length; i++) {
    let count = 0;
    for (let j = 0; j < B.length; j++) {
      if (isSubset(A[i], B[j])) {
        ++count;
      } else {
        count = B.length - 1;
        break;
      }
    }
    if (count === B.length) {
      res.push(A[i]);
    }
  }
  return res;
};
