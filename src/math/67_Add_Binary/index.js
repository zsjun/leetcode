/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// Runtime: 92 ms, faster than 53.83% of JavaScript online submissions for Add Binary.
// Memory Usage: 40.4 MB, less than 66.69% of JavaScript online submissions for Add Binary.
export default (a, b) => {
  const len1 = a.length;
  const len2 = b.length;
  let len = len1;
  const maxLen = Math.max(len1, len2);
  if (len2 < len1) {
    const temp = b;
    b = a;
    a = temp;
    len = len2;
  }
  let flag = 0;
  const res = [];
  for (let i = len - 1; i >= 0; i--) {
    const sum = a.charCodeAt(i) + b.charCodeAt(maxLen - len + i) - 96 + flag;
    if (sum === 2) {
      res.unshift(0);
      flag = 1;
    } else if (sum === 3) {
      res.unshift(1);
      flag = 1;
    } else {
      res.unshift(sum);
      flag = 0;
    }
  }
  if (maxLen > len) {
    for (let i = maxLen - 1 - len; i >= 0; i--) {
      const sum = b.charCodeAt(i) - 48 + flag;
      if (sum === 2) {
        res.unshift(0);
        flag = 1;
      } else if (sum === 3) {
        res.unshift(1);
        flag = 1;
      } else {
        res.unshift(sum);
        flag = 0;
      }
    }
  }

  if (flag === 1) {
    res.unshift(1);
  }
  return res.join("");
};
