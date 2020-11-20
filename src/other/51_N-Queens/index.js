/**
 * @param {number} n
 * @return {string[][]}
 */
// i在上一层所处的位置，n目前处在第几层，nowArr目前存储的数组，res结果集合
const setQ = (i, n, nowArr, res) => {
  const len = nowArr.length;
  if (n === len) {
    const _tempArr = nowArr.map((item) => {
      return item.join(",").replace(/,/g, "");
    });
    res.push(_tempArr);
  } else {
    let notJ = [];
    for (let k = 0; k < n; k++) {
      for (let m = 0; m < len; m++) {
        if (nowArr[k][m] === "Q") {
          if (m - n + k >= 0 && !notJ.includes(m - n + k)) {
            notJ.push(m - n + k);
          }
          if (m + n - k < len && !notJ.includes(m + n - k)) {
            notJ.push(m + n - k);
          }
          if (!notJ.includes(m)) {
            notJ.push(m);
          }
        }
      }
    }
    for (let j = 0; j < len; j++) {
      if (!notJ.includes(j)) {
        nowArr[n][j] = "Q";
        setQ(j, n + 1, nowArr, res);
        nowArr[n][j] = ".";
      }
    }
  }
};
export default (n) => {
  const res = [];
  for (let i = 0; i < n; i++) {
    const temp = new Array(n).fill(".").map((item) => {
      return new Array(n).fill(".");
    });
    temp[0][i] = "Q";
    setQ(i, 1, temp, res);
    temp[0][i] = ".";
  }
  // console.log(res);
  return res;
};
