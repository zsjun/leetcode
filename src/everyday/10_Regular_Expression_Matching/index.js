/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  if (s === null || p === null) {
    return false;
  }

  const dp = new Array(s.length + 1);
  for (let i = 0; i < s.length + 1; i++) {
    dp[i] = new Array(p.length + 1).fill(false);
  }
  dp[0][0] = true;
  //
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
        // 如果是p.charAt(j-1) 是字符，并且不相等，只能取零个字符
        if (p.charAt(j - 1) !== s.charAt(i) && p.charAt(j - 1) !== ".") {
          dp[i + 1][j + 1] = dp[i + 1][j - 1];
        } else {
          // p.charAt(j-1)是字符，并且相等，那此时等于取一个字符也就是dp[i+1][j]
          // p.charAt(j-1)是 "." , 如果相等则 dp[i+1][j-1]
          // p.charAt(j-1)是 ".",  dp[i][j+1]
          dp[i + 1][j + 1] = dp[i + 1][j] || dp[i][j + 1] || dp[i + 1][j - 1];
        }
      }
    }
  }
  return dp[s.length][p.length];
};
