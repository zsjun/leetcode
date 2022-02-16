/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  if (!s) return true;
  if (!p) return false;
  const m = s.length;
  const n = p.length;
  let dp = new Array(m + 1);
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(false);
  }
  dp[0][0] = true;
  for (let i = 1; i <= n; i++) {
    if (p.charAt(i - 1) === "*" && dp[0][i - 2]) {
      dp[0][i] = true;
    }
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p.charAt(j - 1) === ".") {
        dp[i][j] = dp[i - 1][j - 1];
      }
      if (p.charAt(j - 1) === s.charAt(i - 1)) {
        dp[i][j] = dp[i - 1][j - 1];
      }
      if (p.charAt(j - 1) === "*") {
        // 取0个的时候
        if (p.charAt(j - 2) !== s.charAt(i - 1) && p.charAt(j - 2) !== ".") {
          dp[i][j] = dp[i][j - 2];
        } else {
          dp[i][j] = dp[i][j - 2] || dp[i][j - 1] || dp[i - 1][j];
        }
      }
    }
  }
  return dp[m][n];
};
