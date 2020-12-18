/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

// Runtime: 92 ms, faster than 93.90% of JavaScript online submissions for Regular Expression Matching.
// Memory Usage: 41.5 MB, less than 53.93% of JavaScript online submissions for Regular Expression Matching.
export default (s, p) => {
  const m = p.length;
  const n = s.length;

  const dp = [];

  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(false);
  }

  dp[0][0] = true;

  for (let i = 1; i <= m; i++) {
    if (p[i - 1] === "*") {
      if (i >= 2) {
        dp[i][0] = dp[i - 2][0];
      }
    }
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[i - 1] === ".") {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[i - 1] === "*") {
        if (i >= 2) {
          dp[i][j] = dp[i - 2][j] || dp[i - 1][j];
        } else {
          dp[i][j] = dp[i - 1][j];
        }
        if (dp[i][j - 1] && (p[i - 2] === "." || p[i - 2] === s[j - 1])) {
          dp[i][j] = true;
        }
      } else {
        if (p[i - 1] === s[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        }
      }
    }
  }

  return dp[m][n];
};
