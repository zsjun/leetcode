/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
export default (m, n) => {
  let dp = [];
  for (let i = 0; i <= m; i++) {
    dp[i] = [];
  }

  dp[0][0] = 1;
  dp[0][1] = 1;
  dp[1][0] = 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i >= 1 && j >= 1) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      } else if (i > 1 && j < 1) {
        dp[i][j] = dp[i - 1][j];
      } else if (j > 1 && i < 1) {
        dp[i][j] = dp[i][j - 1];
      }
    }
  }
  return dp[m - 1][n - 1];
};
