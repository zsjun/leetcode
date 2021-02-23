/**
 * @param {string[]} strs
 * @return {string}
 */
const getCommonPrefix = (str1, str2) => {
  let res = "";
  for (let i = 0; i < str1.length; i++) {
    if (str1.charAt(i) === str2.charAt(i)) {
      res += str1.charAt(i);
    } else {
      return res;
    }
  }
  return res;
};
// Runtime: 80 ms, faster than 87.76% of JavaScript online submissions for Longest Common Prefix.
// Memory Usage: 41.1 MB, less than 13.45% of JavaScript online submissions for Longest Common Prefix.
export default (strs) => {
  if (strs.length === 0) return "";
  let res = strs[0];
  for (let i = 1; i < strs.length; i++) {
    res = getCommonPrefix(res, strs[i]);
  }
  return res;
};
