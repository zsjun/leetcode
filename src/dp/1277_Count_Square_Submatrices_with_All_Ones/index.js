/**
 * @param {number[][]} matrix
 * @return {number}
 */
export default (matrix) => {
  let res = 0;
  if (matrix.length === 0 || matrix[0].length === 0) return 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 1) {
        if (i >= 1 && j >= 1) {
          matrix[i][j] = Math.min(matrix[i - 1][j - 1], Math.min(matrix[i - 1][j], matrix[i][j - 1])) + 1;
          res += matrix[i][j];
        } else {
          res++;
        }
      }
    }
  }
  console.log(matrix);
  return res;
};
