/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  this.sumMatrix = [];
  const m = matrix.length;
  const n = matrix[0] ? matrix[0].length : 0;
  for (let i = 0; i <= m; i++) {
    this.sumMatrix[i] = new Array(n + 1).fill(0);
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      this.sumMatrix[i + 1][j + 1] = this.sumMatrix[i][j];
      for (let k = 0; k < j; k++) {
        this.sumMatrix[i + 1][j + 1] += matrix[i][k];
      }
      for (let k = 0; k < i; k++) {
        this.sumMatrix[i + 1][j + 1] += matrix[k][j];
      }
      this.sumMatrix[i + 1][j + 1] += matrix[i][j];
    }
  }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  return (
    this.sumMatrix[row2 + 1][col2 + 1] -
    this.sumMatrix[row2 + 1][col1] -
    this.sumMatrix[row1][col2 + 1] +
    this.sumMatrix[row1][col1]
  );
};
// Runtime: 128 ms, faster than 40.59% of JavaScript online submissions for Range Sum Query 2D - Immutable.
// Memory Usage: 44.6 MB, less than 9.90% of JavaScript online submissions for Range Sum Query 2D - Immutable.
export default NumMatrix;
/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
