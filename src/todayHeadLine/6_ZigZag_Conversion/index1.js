/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// Runtime: 352 ms, faster than 5.95% of JavaScript online submissions for ZigZag Conversion.
// Memory Usage: 62.2 MB, less than 5.02% of JavaScript online submissions for ZigZag Conversion.
export default (s, numRows) => {
  const len = s.length;
  const res = [];
  for (let i = 0; i < numRows; i++) {
    res[i] = new Array(len);
  }

  let sIndex = 0;
  while (sIndex < len) {
    // 先获取一列
    for (let index = 0; index < numRows && sIndex < len; index++) {
      res[index].push(s.charAt(sIndex));
      sIndex++;
    }
    for (let j = numRows - 2; j >= 1 && sIndex < len; j--) {
      res[j].push(s.charAt(sIndex));
      sIndex++;
    }
  }
  let res1 = "";
  for (let i = 0; i < numRows; i++) {
    res1 += res[i].join("");
  }
  return res1;
};
