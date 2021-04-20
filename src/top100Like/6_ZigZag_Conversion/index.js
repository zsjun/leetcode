/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

export default (s, numRows) => {
  // 处理特殊情况
  if (!s || numRows <= 1) return s;

  const res = new Array(numRows);
  const len = s.length;
  for (let i = 0; i < numRows; i++) {
    res[i] = new Array(len);
  }

  let dir = "down";
  let rowIndex = 0;
  let columnIndex = 0;
  let count = 0;

  for (let i = 0; i < len; i++) {
    // 如果count
    if (count === len) {
      break;
    }
    if (dir === "down") {
      for (; columnIndex < numRows; columnIndex++) {
        res[columnIndex][i] = s.charAt(count);
        ++count;
      }
      dir = "up";
    } else {
      if (columnIndex === numRows && numRows >= 2) {
        columnIndex -= 2;
      } else {
        --columnIndex;
      }
      if (columnIndex >= 1) {
        res[columnIndex][i] = s.charAt(count);
        ++count;
      }

      if (columnIndex <= 1) {
        columnIndex = 0;
        dir = "down";
      }
    }
  }
  let res1 = "";
  for (let i = 0; i < numRows; i++) {
    res1 += res[i].join("");
  }
  return res1;
};
