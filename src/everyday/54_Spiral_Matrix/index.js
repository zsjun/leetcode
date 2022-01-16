/**
 * @param {number[][]} matrix
 * @return {number[]}
 *
 *
 */
// Runtime: 109 ms, faster than 17.01% of JavaScript online submissions for Spiral Matrix.
// Memory Usage: 37.8 MB, less than 98.61% of JavaScript online submissions for Spiral Matrix.
const travel = (matrix, rowStart, rowEnd, colStart, colEnd, res) => {
  if (rowStart > rowEnd) return;
  if (colStart > colEnd) return;
  if (colStart === colEnd) {
    for (let i = rowStart; i <= rowEnd; i++) {
      res.push(matrix[i][colStart]);
    }
    return;
  }
  if (rowStart === rowEnd) {
    for (let i = colStart; i <= colEnd; i++) {
      res.push(matrix[rowStart][i]);
    }
    return;
  }
  //
  for (let i = colStart; i <= colEnd; i++) {
    res.push(matrix[rowStart][i]);
  }
  for (let i = rowStart + 1; i < rowEnd; i++) {
    res.push(matrix[i][colEnd]);
  }
  for (let i = colEnd; i >= colStart; i--) {
    res.push(matrix[rowEnd][i]);
  }
  for (let i = rowEnd - 1; i > rowStart; i--) {
    res.push(matrix[i][colStart]);
  }
  travel(matrix, rowStart + 1, rowEnd - 1, colStart + 1, colEnd - 1, res);
};
var spiralOrder = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let res = [];
  travel(matrix, 0, m - 1, 0, n - 1, res);
  return res;
};
