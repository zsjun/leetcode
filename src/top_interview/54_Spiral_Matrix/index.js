/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = (matrix) => {
  if (matrix.length === 0) {
    return [];
  }
  let res = [];
  let rowStart = 0,
    rowEnd = matrix.length - 1,
    colStart = 0,
    colEnd = matrix[0].length - 1;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (let i = colStart; i <= colEnd; i++) {
      res.push(matrix[rowStart][i]);
    }
    rowStart++;

    for (let j = rowStart; j <= rowEnd; j++) {
      res.push(matrix[j][colEnd]);
    }
    colEnd--;

    if (rowStart <= rowEnd) {
      for (let i = colEnd; i >= colStart; i--) {
        res.push(matrix[rowEnd][i]);
      }
    }
    rowEnd--;

    if (colStart <= colEnd) {
      for (let j = rowEnd; j >= rowStart; j--) {
        res.push(matrix[j][colStart]);
      }
    }
    colStart++;
  }
  return res;
};

export default spiralOrder;
