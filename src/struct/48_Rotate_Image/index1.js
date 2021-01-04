/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// Runtime: 72 ms, faster than 93.88% of JavaScript online submissions for Rotate Image.
// Memory Usage: 38.9 MB, less than 32.93% of JavaScript online submissions for Rotate Image.
const rotate = (matrix) => {
  const len = matrix.length;
  let low = 0;
  let high = len - 1;
  while (low < high) {
    for (let i = 0; i < len; i++) {
      const temp = matrix[low][i];
      matrix[low][i] = matrix[high][i];
      matrix[high][i] = temp;
    }
    low++;
    high--;
  }
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
};
export default rotate;
