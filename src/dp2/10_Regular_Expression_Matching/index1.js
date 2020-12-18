/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

// dp[i][j];
// Runtime: 92 ms, faster than 93.90% of JavaScript online submissions for Regular Expression Matching.
// Memory Usage: 42.1 MB, less than 42.54% of JavaScript online submissions for Regular Expression Matching.
export default (s, p) => {
  const m = s.length;
  const n = p.length;
  const dp = [];
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(false);
  }

  dp[0][0] = true;

  for (let i = 1; i <= n; i++) {
    if (p[i - 1] == "*") {
      dp[0][i] = dp[0][i - 2];
    }
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      //如果是.则只要dp[i - 1][j - 1] 为true则为true
      if (p[j - 1] == ".") {
        dp[i][j] = dp[i - 1][j - 1];
        // p[j-1]等于字母
      } else if (p[j - 1] != "*") {
        dp[i][j] = dp[i - 1][j - 1] && p[j - 1] == s[i - 1];
        // p[j-1] 等于“*”,
      } else if (p[j - 2] != s[i - 1] && p[j - 2] != ".") {
        dp[i][j] = dp[i][j - 2];
      } else {
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j] || dp[i][j - 2];
      }
    }
  }
  return dp[m][n];
};
