/**
 * @param {number[][]} grid
 * @return {number}
 */
// Runtime: 84 ms, faster than 68.34% of JavaScript online submissions for Minimum Path Sum.
// Memory Usage: 41.1 MB, less than 30.49% of JavaScript online submissions for Minimum Path Sum.
export default (grid) => {
  const m = grid.length;
  const n = grid[0].length;
  if (m === 1 && n === 1) {
    return grid[0][0];
  }
  const dp = [];
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(0);
  }
  dp[0][0] = grid[0][0];
  for (let i = 1; i < n; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i];
  }
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }

  // dp[0];
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[m - 1][n - 1];
};
