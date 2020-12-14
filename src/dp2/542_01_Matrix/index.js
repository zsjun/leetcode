/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
// Runtime: 148 ms, faster than 96.10% of JavaScript online submissions for 01 Matrix.
// Memory Usage: 46.8 MB, less than 79.22% of JavaScript online submissions for 01 Matrix.
export default (matrix) => {
  const m = matrix.length;
  const n = matrix[0].length;
  if (m === 0) {
    return [[]];
  }
  const dp = [];
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(Number.MAX_VALUE);
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        dp[i][j] = 0;
      } else {
        if (i > 0) {
          dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + 1);
        }
        if (j > 0) {
          dp[i][j] = Math.min(dp[i][j], dp[i][j - 1] + 1);
        }
      }
    }
  }
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (matrix[i][j] != 0) {
        if (i < m - 1) {
          dp[i][j] = Math.min(dp[i][j], dp[i + 1][j] + 1);
        }
        if (j < n - 1) {
          dp[i][j] = Math.min(dp[i][j], dp[i][j + 1] + 1);
        }
      }
    }
  }
  return dp;
};
