/**
 * @param {string[]} strs
 * @return {string}
 */
const getLongestStr = (s1 = "", s2 = "") => {
  const s1Len = s1.length;
  const s2Len = s2.length;
  const len = s1Len >= s2Len ? s2Len : s1Len;
  let start = 0;

  while (start <= len) {
    if ((s1.charAt(start) !== s2.charAt(start) && start > 0) || start === len) {
      return s1.substring(0, start);
    } else if (s1.charAt(start) !== s2.charAt(start) && start === 0) {
      return "";
    } else if (s1.charAt(start) === s2.charAt(start)) {
      ++start;
    }
  }
  return "";
};
// Runtime: 88 ms, faster than 53.16% of JavaScript online submissions for Longest Common Prefix.
// Memory Usage: 41.2 MB, less than 13.21% of JavaScript online submissions for Longest Common Prefix.
export default (strs) => {
  if (strs.length < 1 || !strs) return "";
  if (strs.length === 1) return strs[0];
  let res = getLongestStr(strs[0], strs[1]);

  for (let i = 2; i < strs.length; i++) {
    res = getLongestStr(res, strs[i]);
  }
  return res;
};
