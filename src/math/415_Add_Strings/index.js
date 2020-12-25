/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// Runtime: 76 ms, faster than 98.86% of JavaScript online submissions for Add Strings.
// Memory Usage: 40.9 MB, less than 47.14% of JavaScript online submissions for Add Strings.
export default (num1, num2) => {
  const len1 = num1.length;
  const len2 = num2.length;
  let len = len1;
  const maxLen = Math.max(len1, len2);
  if (len2 < len1) {
    const temp = num2;
    num2 = num1;
    num1 = temp;
    len = len2;
  }
  let flag = 0;
  const res = [];
  for (let i = len - 1; i >= 0; i--) {
    const sum = num1.charCodeAt(i) + num2.charCodeAt(maxLen - len + i) - 96 + flag;
    if (sum >= 10) {
      res.unshift(sum % 10);
      flag = 1;
    } else {
      res.unshift(sum);
      flag = 0;
    }
  }
  if (maxLen > len) {
    for (let i = maxLen - 1 - len; i >= 0; i--) {
      const sum = num2.charCodeAt(i) - 48 + flag;
      if (sum >= 10) {
        res.unshift(sum % 10);
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
