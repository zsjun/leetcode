/**
 * @param {number[][]} mat
 * @return {number}
 */
//  Runtime: 76 ms, faster than 68.14% of JavaScript online submissions for Matrix Diagonal Sum.
//  Memory Usage: 40.8 MB, less than 23.97% of JavaScript online submissions for Matrix Diagonal Sum.
export default (mat) => {
  let res = 0;
  const map = new Map();

  let rowIndex = 0;
  let colIndex = 0;
  const rowLen = mat.length;
  if (rowLen < 0) {
    return 0;
  }
  if (rowLen === 1) {
    return mat[0][0];
  }
  const colLen = mat[0].length;

  while (rowIndex < rowLen && colIndex < colLen) {
    if (!map.has(`${rowIndex},${colIndex}`)) {
      map.set(`${rowIndex},${colIndex}`, true);
      res += mat[rowIndex][colIndex];
      rowIndex++;
      colIndex++;
    } else {
      rowIndex++;
      colIndex++;
    }
  }
  // console.log(res)
  colIndex = colLen - 1;
  rowIndex = 0;

  while (colIndex >= 0 && rowIndex < rowLen) {
    if (!map.has(`${rowIndex},${colIndex}`)) {
      map.set(`${rowIndex},${colIndex}`, true);
      res += mat[rowIndex][colIndex];
      rowIndex++;
      colIndex--;
    } else {
      rowIndex++;
      colIndex--;
    }
  }
  return res;
};
