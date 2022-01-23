/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const len1 = word1.length;
  const len2 = word2.length;
  const dp = new Array(len1 + 1);
  for (let i = 0; i <= len1; i++) {
    dp[i] = new Array(len2 + 1).fill(0);
  }
  for (let i = 0; i <= len2; i++) {
    dp[0][i] = i;
  }
  for (let j = 0; j <= len1; j++) {
    dp[j][0] = j;
  }

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // 插入一个
        // dp[i-1][j-1] + 1
        // j-1 插入一个
        // dp[i][j-1]
        // dp[i-1][j] 插入一个
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1]) + 1;
        dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j]);
      }
    }
  }
  return dp[len1][len2];
};
