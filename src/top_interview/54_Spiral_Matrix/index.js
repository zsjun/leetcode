/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const getRes = (matrix, rowStart, rowEnd, colStart, colEnd, res) => {
  // console.log(2, 1, 2, 2);
  if (rowStart >= rowEnd || colStart >= colEnd) return;
  // 上边
  if (colEnd - colStart > 1) {
    for (let i = colStart; i < colEnd; i++) {
      if (matrix[rowStart][i] || matrix[rowStart][i] === 0) {
        res.push(matrix[rowStart][i]);
      }
    }
  }

  // 右边
  if (rowEnd - rowStart > 1) {
    for (let i = rowStart + 1; i < rowEnd; i++) {
      if (matrix[i][colEnd - 1] || matrix[i][colEnd - 1] === 0) {
        res.push(matrix[i][colEnd - 1]);
      }
    }
  }

  if (rowEnd - rowStart > 1) {
    for (let i = colEnd - 2; i >= colStart; i--) {
      if (matrix[rowEnd - 1][i] || matrix[rowEnd - 1][i] === 0) {
        res.push(matrix[rowEnd - 1][i]);
      }
    }
  }
  // 左边
  if (rowEnd - rowStart > 1) {
    console.log(res);
    for (let i = rowEnd - 2; i >= rowStart + 1; i--) {
      if (matrix[i][colStart + 1] || matrix[i][colStart + 1] === 0) {
        res.push(matrix[i][colStart]);
      }
    }
    console.log(rowStart, rowEnd, colStart, colEnd);
    console.log(res);
  }

  getRes(matrix, rowStart + 1, rowEnd - 1, colStart + 1, colEnd - 1, res);
};
const getSprial = (matrix) => {
  let res = [];
  if (matrix.length === 0) {
    return [];
  }
  getRes(matrix, 0, matrix.length, 0, matrix[0].length, res);

  return res;
};

export default getSprial;
