/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const visited = new Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = new Array(n).fill(false);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0 && !visited[i][j]) {
        for (let k = 0; k < n; k++) {
          if (matrix[i][k] !== 0) {
            matrix[i][k] = 0;
            visited[i][k] = true;
          }
        }
        for (let m1 = 0; m1 < m; m1++) {
          if (matrix[m1][j] !== 0) {
            matrix[m1][j] = 0;
            visited[m1][j] = true;
          }
        }
      }
    }
  }
  return matrix;
};
