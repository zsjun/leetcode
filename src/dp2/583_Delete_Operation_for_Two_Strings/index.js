/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

// "sea", "eat";

// Runtime: 108 ms, faster than 93.48% of JavaScript online submissions for Delete Operation for Two Strings.
// Memory Usage: 45 MB, less than 75.00% of JavaScript online submissions for Delete Operation for Two Strings.
export default (word1, word2) => {
  if (word1 === word2) {
    return 0;
  }
  if (word1.length === 0) {
    return word2.length;
  }
  if (word2.length === 0) {
    return word1.length;
  }
  const m = word1.length;
  const n = word2.length;
  const dp = [];
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(0);
  }
  for (let i = 1; i <= n; i++) {
    dp[0][i] = i;
  }
  for (let i = 1; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
      }
    }
  }
  // console.log(dp);
  return dp[m][n];
};
