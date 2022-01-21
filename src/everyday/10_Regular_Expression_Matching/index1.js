/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const m = s.length;
  const n = p.length;
  const dp = new Array(m + 1);
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(false);
  }
  dp[0][0] = true;
  for (let i = 1; i < n; i++) {
    if (p.charAt(i) === "*") {
      dp[0][i + 1] = dp[0][i - 1];
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (p.charAt(j) === ".") {
        dp[i + 1][j + 1] = dp[i][j];
      }
      if (p.charAt(j) === s.charAt(i) && p.charAt(j) !== ".") {
        dp[i + 1][j + 1] = dp[i][j];
      }
      if (p.charAt(j) === "*") {
        if (p.charAt(j - 1) !== s.charAt(i) && p.charAt(j - 1)) {
          dp[i + 1][j + 1] = dp[i + 1][j - 1];
        } else {
          // p.charAt(j-1)是字符，并且相等，那此时等于取一个字符也就是dp[i+1][j]
          // p.charAt(j-1)是 "." , 此时取0个，则 dp[i+1][j-1]
          // p.charAt(j-1)是 ".",  如果是多个的话，就看前面的，dp[i][j+1]
          dp[i + 1][j + 1] = dp[i + 1][j - 1] || dp[i + 1][j] || dp[i][j + 1];
        }
      }
    }
  }

  return dp[m][n];
};
