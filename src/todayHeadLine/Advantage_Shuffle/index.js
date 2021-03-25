/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
// [2,0,4,1,2]
// [1,3,0,0,2]
// 1    2    2  4  0
// 0 ， 0 ，  1，2， 3
// [12,24,8,32]    8,12,24,32
// [13,25,32,11]   11,13,25,32
// 排序规则，可以通过排序分别不同
export default (A = [], B = []) => {
  A.sort((a, b) => a - b);
  const map = new Map();
  for (let i = 0; i < B.length; i++) {
    if (map.has(B[i])) {
      map.get(B[i]).push(i);
    } else {
      map.set(B[i], [i]);
    }
  }
  B.sort((a, b) => a - b);
  const res = [];
  let len = B.length;
  let bIndex = 0;
  for (let i = 0; i < A.length; i++) {
    if (bIndex < A.length && len >= 0) {
      if (A[i] > B[bIndex]) {
        const index = map.get(B[bIndex]).shift();
        res[index] = A[i];
        ++bIndex;
      } else {
        const index = map.get(B[len - 1]).shift();
        res[index] = A[i];
        --len;
      }
    }
  }
  return res;
};
