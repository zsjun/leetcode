/**
 * @param {number[]} A
 * @return {number}
 */
// Runtime: 84 ms, faster than 18.63% of JavaScript online submissions for Arithmetic Slices.
// Memory Usage: 41.1 MB, less than 5.88% of JavaScript online submissions for Arithmetic Slices.
export default (A) => {
  if (!A || A.length < 3) return [];
  let dp = [];
  if (A[2] - A[1] === A[1] - A[0]) {
    dp.push([A[0], A[1], A[2]]);
  }
  for (let i = 3; i < A.length; i++) {
    const tempArr = [];
    tempArr.push(A[i]);
    const val = A[i] - A[i - 1];
    for (let k = i - 1; k >= 0; k--) {
      if (tempArr[0] - A[k] === val) {
        tempArr.unshift(A[k]);
        if (tempArr.length >= 3) {
          dp.push([...tempArr]);
        }
      } else {
        break;
      }
    }
  }
  return dp.length;
};
