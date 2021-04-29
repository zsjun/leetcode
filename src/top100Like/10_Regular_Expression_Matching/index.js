/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

// 这里的难点就是需要处理 * 的情况，dp[i][j] 当遇到*的情况下，让i回退
// Runtime: 104 ms, faster than 77.77% of JavaScript online submissions for Regular Expression Matching.
// Memory Usage: 40.8 MB, less than 72.52% of JavaScript online submissions for Regular Expression Matching.
export default (s, p) => {
  if (s === null || p === null) {
    return false;
  }
  const sLen = s.length;
  const pLen = p.length;
  const dp = new Array(sLen + 1);
  for (let i = 0; i <= sLen; i++) {
    dp[i] = new Array(pLen + 1).fill(false);
  }
  dp[0][0] = true;
  for (let i = 0; i < pLen; i++) {
    if (p.charAt(i) === "*" && dp[0][i - 1]) {
      dp[0][i + 1] = true;
    }
  }
  for (let i = 0; i < sLen; i++) {
    for (let j = 0; j < pLen; j++) {
      if (p.charAt(j) === ".") {
        dp[i + 1][j + 1] = dp[i][j];
      }
      if (p.charAt(j) === s.charAt(i)) {
        dp[i + 1][j + 1] = dp[i][j];
      }
      if (p.charAt(j) === "*") {
        if (p.charAt(j - 1) != s.charAt(i) && p.charAt(j - 1) != ".") {
          dp[i + 1][j + 1] = dp[i + 1][j - 1];
        } else {
          dp[i + 1][j + 1] = dp[i + 1][j] || dp[i][j + 1] || dp[i + 1][j - 1];
        }
      }
    }
  }
  return dp[sLen][pLen];
};
