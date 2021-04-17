/**
 * @param {string} s
 * @return {string}
 */
// 遇到题目之后，第一想到的是暴力解法，第二就需要想到的是递归解法，我们来看下是否可以使用递归来解决
// 但是好像可以使用动态规划来解决
// dp[i] 表示以第i个字符结束的最长回文字符串，那么dp[i+1] 要么是s[i+1]等于s[i+1-dp[i]-1]也就是s[i-dp[i]]
// 思路有了，我们来写下代码
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
export default (s) => {
  // 首先来考虑特殊情况
  if (!s) return "";
  if (s.length === 1) return s;

  // 定义一个动态规划数组
  const len = s.length;
  // 定义一个二维数组，dp[i][1]=1
  const dp = new Array(len);
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len).fill(false);
  }
  // 结果
  let res = s.charAt(0);
  // dp[0] = 1;
  // 从长度开始遍历
  for (let strLen = 2; strLen <= len; ++strLen) {
    for (let i = 0; i < len; i++) {
      for (let j = i; j < i + strLen; j++) {
        if (i === j) {
          dp[i][j] = true;
        }
        if (i + 1 < len && j < len + 1 && s.charAt(j) === s.charAt(i) && (dp[i + 1][j - 1] || j === i + 1)) {
          dp[i][j] = true;
          if (j - i + 1 > res.length) {
            res = s.substring(i, j + 1);
          }
        }
      }
    }
  }
  return res;
};
