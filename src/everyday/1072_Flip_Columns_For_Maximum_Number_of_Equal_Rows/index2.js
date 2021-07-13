const reverseStr = (str) => {
  let s = "";
  for (let i = 0; i < str.length; i++) {
    s += str.charAt(i) === "0" ? "1" : "0";
  }
  return s;
};
// Runtime: 532 ms, faster than 14.29% of JavaScript online submissions for Flip Columns For Maximum Number of Equal Rows.
// Memory Usage: 50.3 MB, less than 42.86% of JavaScript online submissions for Flip Columns For Maximum Number of Equal Rows.
// 原理还是一样的，只不过是用map来存储，关键是如何想到这里是求最后相同的和相反的数量
export default (matrix) => {
  let ans = 0;
  let m = matrix.length,
    n = matrix[0].length;
  const map = new Map();
  for (let i = 0; i < m; i++) {
    let s = "";
    for (let j = 0; j < n; j++) {
      s += matrix[i][j];
    }
    //console.log(s, map)
    if (!map.has(s) && !map.has(reverseStr(s))) {
      map.set(s, 1);
    } else {
      if (map.get(s)) {
        const count = map.get(s) + 1;
        map.set(s, count);
      } else {
        const count = map.get(reverseStr(s)) + 1;
        map.set(reverseStr(s), count);
      }
    }
  }
  // console.log(map)
  for (let val of map.values()) {
    ans = Math.max(ans, val);
  }
  return ans;
};
