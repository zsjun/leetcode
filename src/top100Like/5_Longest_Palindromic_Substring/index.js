/**
 * @param {string} s
 * @return {string}
 */
// 这里是求字符串中最长的回文字符串
// 不管是任务问题，首先都可以考虑暴力解法
const isPalindromic = (s, i, j) => {
  let res = true;
  while (i <= j) {
    if (s.charAt(i) !== s.charAt(j)) {
      return false;
    } else {
      --j;
      ++i;
    }
  }
  return res;
};
// Runtime: 3052 ms, faster than 11.08% of JavaScript online submissions for Longest Palindromic Substring.
// Memory Usage: 39.5 MB, less than 98.51% of JavaScript online submissions for Longest Palindromic Substring.
export default (s) => {
  // 首先来考虑特殊情况
  if (!s) return "";
  if (s.length === 1) return s;

  // 利用两个循环，来判断是否是最长回文字符串
  let res = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = s.length - 1; j >= i; --j) {
      // 这里判断当前从i到j是否是回文字符串
      let low = i;
      let high = j;
      if (isPalindromic(s, low, high)) {
        if (high - low + 1 > res.length) {
          res = s.substring(low, high + 1);
        }
      }
    }
  }
  return res;
};
