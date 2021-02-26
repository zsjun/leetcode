/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// Runtime: 352 ms, faster than 5.95% of JavaScript online submissions for ZigZag Conversion.
// Memory Usage: 62.2 MB, less than 5.02% of JavaScript online submissions for ZigZag Conversion.
export default (s, numRows) => {
  const len = s.length;
  const res = new Array(len).fill("");
  let step = 1;
  let index = 0;
  for (let i = 0; i < len; i++) {
    res[index] += s.charAt(i);
    if (index === 0) {
      step = 1;
    } else if (index === numRows - 1) {
      step = -1;
    }
    index += step;
  }
  return res.join("");
};
