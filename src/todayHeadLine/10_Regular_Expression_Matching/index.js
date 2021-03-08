/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// Runtime: 92 ms, faster than 96.72% of JavaScript online submissions for Regular Expression Matching.
// Memory Usage: 40.5 MB, less than 77.03% of JavaScript online submissions for Regular Expression Matching.
const isMatch = (s, p) => {
  if (!s || !p) {
    return false;
  }
  const dp = new Array(s.length + 1);
  for (let i = 0; i < s.length + 1; i++) {
    dp[i] = new Array(p.length + 1).fill(false);
  }
  dp[0][0] = true;
  for (let i = 0; i < p.length; i++) {
    if (p.charAt(i) === "*" && dp[0][i - 1]) {
      dp[0][i + 1] = true;
    }
  }
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < p.length; j++) {
      if (p.charAt(j) === ".") {
        dp[i + 1][j + 1] = dp[i][j];
      }
      if (p.charAt(j) === s.charAt(i)) {
        dp[i + 1][j + 1] = dp[i][j];
      }
      if (p.charAt(j) === "*") {
        if (p.charAt(j - 1) !== s.charAt(i) && p.charAt(j - 1) !== ".") {
          dp[i + 1][j + 1] = dp[i + 1][j - 1];
        } else {
          dp[i + 1][j + 1] = dp[i + 1][j] || dp[i][j + 1] || dp[i + 1][j - 1];
        }
      }
    }
  }
  return dp[s.length][p.length];
};

export default isMatch;
