/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

export default (matrix) => {
  const m = matrix.length;
  const n = matrix[0].length;
  const arr = new Array(m + n).fill(0);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        arr[i] = 1;
        arr[m + j] = 1;
      }
    }
  }
  for (let i = 0; i < m + n; i++) {
    if (arr[i] === 1) {
      if (i >= 0 && i < m) {
        for (let j = 0; j < n; j++) {
          matrix[i][j] = 0;
        }
      } else {
        for (let k = 0; k < m; k++) {
          matrix[k][i - m] = 0;
        }
      }
    }
  }
};
