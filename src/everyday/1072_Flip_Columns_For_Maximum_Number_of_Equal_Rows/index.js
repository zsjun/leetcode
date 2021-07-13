/**
 * @param {number[][]} matrix
 * @return {number}
 */
const rever = (matrix, col) => {
  const rows = matrix.length;
  for (let i = 0; i < rows; i++) {
    matrix[i][col] = matrix[i][col] === 1 ? 1 : 0;
  }
};
const count = (matrix) => {
  const rows = matrix.length;
  let max = 0;
  for (let i = 0; i < rows; i++) {
    let flag = true;
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[i][j] !== matrix[i][j - 1]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      max++;
    }
  }
  return max;
};
const reverCount = (matrix, begin = 0) => {
  if (matrix[0].length <= begin) {
    return;
  }
  let max = count(matrix);
  if (begin + 1 < matrix[0].length) {
    max = Math.max(max, reverCount(matrix, begin + 1));
  }
  rever(matrix, begin);
  if (begin + 1 < matrix[0].length) {
    max = Math.max(max, reverCount(matrix, begin + 1));
  }
  return max;
};
export default (matrix) => {
  return reverCount(matrix, 0);
};
