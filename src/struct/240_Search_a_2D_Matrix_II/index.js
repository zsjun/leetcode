/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// Runtime: 296 ms, faster than 64.11% of JavaScript online submissions for Search a 2D Matrix II.
// Memory Usage: 41.8 MB, less than 58.69% of JavaScript online submissions for Search a 2D Matrix II.
export default (matrix, target) => {
  if (matrix.length === 0) {
    return false;
  }
  let row = 0;
  let col = matrix[0].length - 1;
  while (col >= 0 && row < matrix.length) {
    if (target === matrix[row][col]) {
      return true;
    } else if (target < matrix[row][col]) {
      col--;
    } else {
      row++;
    }
  }
  return false;
};
