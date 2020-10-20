/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// dp[i][j] 表示到s i-1和到p j-1是否匹配
const isMatch = (s, p) => {
  const sLen = s.length;
  const pLen = p.length;

  if (s == null || p == null) {
    return false;
  }

  let dp = [];
  for (let i = 0; i <= sLen; i++) {
    dp[i] = new Array(pLen + 1).fill(false);
  }
  dp[0][0] = true;
  for (let j = 0; j < pLen; j++) {
    if (p[j] === "*" && j >= 1 && dp[0][j - 1]) {
      dp[0][j + 1] = true;
    }
  }

  for (let i = 0; i < sLen; i++) {
    for (let j = 0; j < pLen; j++) {
      if (p.charAt(j) == ".") {
        dp[i + 1][j + 1] = dp[i][j];
      }
      if (p.charAt(j) == s.charAt(i)) {
        dp[i + 1][j + 1] = dp[i][j];
      }
      if (p.charAt(j) == "*") {
        if (j >= 1 && p.charAt(j - 1) != s.charAt(i) && p.charAt(j - 1) != ".") {
          dp[i + 1][j + 1] = dp[i + 1][j - 1];
        } else {
          if (j >= 1) {
            dp[i + 1][j + 1] = dp[i + 1][j] || dp[i][j + 1] || dp[i + 1][j - 1];
          }
        }
      }
    }
  }
  return dp[s.length][p.length];
};

export default isMatch;
