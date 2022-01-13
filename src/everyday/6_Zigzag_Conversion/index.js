/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const len = s.length;
  if (!s) return "";
  if (s.length === 1) return s;
  if (numRows === 1) return s;
  const arr = new Array(numRows);
  for (let i = 0; i < numRows; i++) {
    arr[i] = new Array(len).fill(-1);
  }
  let k = 0;
  let rowIndex = 0;
  let colIndex = 0;
  while (k < len) {
    if (rowIndex === 0) {
      while (rowIndex < numRows) {
        arr[rowIndex][colIndex] = s.charAt(k);
        k++;
        rowIndex++;
      }
      colIndex++;
      rowIndex -= 2;
    } else {
      while (rowIndex < numRows && rowIndex !== 0) {
        arr[rowIndex][colIndex] = s.charAt(k);
        k++;
        rowIndex--;
        colIndex++;
      }
    }
  }

  let res = "";
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[i][j] !== -1) {
        res += arr[i][j];
      }
    }
  }
  return res;
};
