/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

// (word1 = "horse"), (word2 = "ros");
// Runtime: 124 ms, faster than 40.13% of JavaScript online submissions for Edit Distance.
// Memory Usage: 42.8 MB, less than 90.97% of JavaScript online submissions for Edit Distance.
export default (word1, word2) => {
  const m = word1.length;
  const n = word2.length;

  const dp = [];
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(0);
  }
  for (let i = 0; i <= n; i++) {
    dp[0][i] = i;
  }
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
    }
  }
  // console.log(dp);
  return dp[m][n];
};
