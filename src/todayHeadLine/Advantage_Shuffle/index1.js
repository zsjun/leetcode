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
export default (A = [], B = []) => {
  const n = A.length;
  const ans = new Array(n).fill(0);
  A.sort((a, b) => a - b);
  const index = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    index[i] = i;
  }
  index.sort((a, b) => B[b] - B[a]);
  let lo = 0,
    hi = n - 1;
  for (let idx of index) {
    const val = B[idx];
    if (A[hi] > val) {
      ans[idx] = A[hi--];
    } else {
      ans[idx] = A[lo++];
    }
  }

  return ans;
};
