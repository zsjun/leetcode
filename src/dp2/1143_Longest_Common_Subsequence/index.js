/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

//  Runtime: 116 ms, faster than 62.14% of JavaScript online submissions for Longest Common Subsequence.
//  Memory Usage: 48.4 MB, less than 91.40% of JavaScript online submissions for Longest Common Subsequence.
// export default (text1, text2) => {
  const m = text1.length;
  const n = text2.length;
  const dp = [];
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(0);
  }
  // console.log(dp);
  for (let i = 1; i <= m; ++i) {
    for (let j = 1; j <= n; ++j) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  // console.log(dp);
  return dp[m][n];
};
