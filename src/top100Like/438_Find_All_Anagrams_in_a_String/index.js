/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const sortStr = (str = "") => {
  return str.split("").sort().join("");
};
// 超时
export default (s, p) => {
  const tempP = sortStr(p);
  const len = tempP.length;
  const res = [];
  for (let i = 0; i <= s.length - len; i++) {
    let tempStr = s.substring(i, i + len);
    tempStr = sortStr(tempStr);
    if (tempStr === tempP) {
      res.push(i);
    }
  }
  return res;
};
