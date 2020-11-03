/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

export default (matrix, target) => {
  if (matrix == null || matrix.length < 1 || matrix[0].length < 1) {
    return false;
  }
  let col = matrix[0].length - 1;
  let row = 0;

  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] > target) {
      col--;
    } else if (matrix[row][col] < target) {
      row++;
    }
  }
  return false;
};
