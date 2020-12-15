/**
 * @param {character[][]} matrix
 * @return {number}
 */

// Runtime: 84 ms, faster than 94.48% of JavaScript online submissions for Maximal Square.
// Memory Usage: 42.2 MB, less than 29.75% of JavaScript online submissions for Maximal Square.

export default (matrix) => {
  const m = matrix.length;
  const n = matrix[0].length;
  if (m === 0 || n === 0) {
    return 0;
  }
  const dp = [];
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(0);
  }

  let max = 0;
  for (let i = 0; i < n; i++) {
    dp[0][i] = +matrix[0][i];
    max = Math.max(max, dp[0][i]);
  }

  for (let i = 0; i < m; i++) {
    dp[i][0] = +matrix[i][0];
    max = Math.max(max, dp[i][0]);
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === "1") {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1;
      }
      max = Math.max(max, dp[i][j]);
    }
  }
  return max * max;
};
