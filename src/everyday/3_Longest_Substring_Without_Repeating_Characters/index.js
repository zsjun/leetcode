/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s) return 0;
  // 表示以s[i]结尾的字符串长度
  const res = [];
  let max = 1;
  res[0] = 1;

  for (let i = 1; i < s.length; i++) {
    let count = res[i - 1] || 0;
    let flag = true;
    for (let j = i - count; j < i; j++) {
      if (s.charAt(j) === s.charAt(i)) {
        res[i] = i - j;
        flag = false;
      }
    }
    if (flag) {
      res[i] = count + 1;
    }
    max = Math.max(res[i], max);
  }
  return max;
};
export default lengthOfLongestSubstring;
