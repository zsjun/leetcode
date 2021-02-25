/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// numRows = 3;
// "PAYPALISHIRING"
// [
//   ["P", 0, 0, "S", 0, 0, "G", 0, 0, 0, 0, 0, 0, 0],
//   ["A", 0, "L", "H", 0, "N", 0, 0, 0, 0, 0, 0, 0, 0],
//   ["Y", "A", 0, "I", "I", 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   ["P", 0, 0, "R", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
// ];
// Runtime: 352 ms, faster than 5.95% of JavaScript online submissions for ZigZag Conversion.
// Memory Usage: 62.2 MB, less than 5.02% of JavaScript online submissions for ZigZag Conversion.
export default (s, numRows) => {
  const col = s.length;
  const res = [];
  for (let i = 0; i < numRows; i++) {
    res[i] = new Array(col).fill(0);
  }
  let j = 0;
  let row = 0;
  // console.log(res)
  for (let k = 0; k < s.length; ) {
    if (j === 0) {
      while (j < numRows) {
        res[j][row] = s.charAt(k);
        k++;
        j++;
      }
      --j;
      if (j === 0) {
        ++row;
      }
    } else {
      if (j >= 1) {
        --j;
      }

      ++row;
      if (j !== 0) {
        res[j][row] = s.charAt(k);
        k++;
      }
    }
  }
  let res1 = "";
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < s.length; j++) {
      if (res[i][j] !== 0) {
        res1 += res[i][j];
      }
    }
  }
  return res1;
};
