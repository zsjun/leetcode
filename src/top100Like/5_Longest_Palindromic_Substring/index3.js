/**
 * @param {string} s
 * @return {string}
 */

// Runtime: 1340 ms, faster than 22.72% of JavaScript online submissions for Longest Palindromic Substring.
// Memory Usage: 67.2 MB, less than 13.58% of JavaScript online submissions for Longest Palindromic Substring.
// 这里的基本原理就是dp[i][j] = s.charAt(i) === s.charAt(j) && (j - i < 3 || dp[i + 1][j - 1])
// 因为动态规划最基本的就是找到状态转移方程
export default (s) => {
  // 首先还是处理特殊情况
  const len = s.length;
  if (len < 2) {
    return s;
  }
  // 返回的结果
  let res = "";

  // 这里是相当于是建立了一个二维数组
  const dp = new Array(len);
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len).fill(false);
  }
  // boolean[][] dp = new boolean[n][n];
  // 从后往前遍历
  for (let i = len - 1; i >= 0; i--) {
    // 这里是j是从i到字符串的结尾
    for (let j = i; j < len; j++) {
      //  这里是判断dp[i][j] 是否是true,如果
      dp[i][j] = s.charAt(i) === s.charAt(j) && (j - i < 3 || dp[i + 1][j - 1]);
      // 然后这里是更新最大字符串
      if (dp[i][j] && (!res || j - i + 1 > res.length)) {
        res = s.substring(i, j + 1);
      }
    }
  }

  return res;
};
