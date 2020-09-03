/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
export default (word1, word2) => {
  // dp
  let dp = [];
  const s1 = word1.length;
  const s2 = word2.length;
  for (let i = 0; i <= s1; i++) {
    dp[i] = [];
  }
  // dp[i][j] 代表长度为i的字符串word1，到长度为j的字符串word2需要经过最小改变次数
  for (let i = 0; i <= s1; i++) {
    for (let j = 0; j <= s2; j++) {
      dp[i][j] = 0;
    }
  }

  for (let i = 0; i <= s1; i++) {
    dp[i][0] = i;
  }

  for (let i = 0; i <= s2; i++) {
    dp[0][i] = i;
  }

  for (let i = 1; i <= s1; i++) {
    for (let j = 1; j <= s2; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], Math.min(dp[i][j - 1], dp[i - 1][j])) + 1;
      }
    }
  }
  return dp[s1][s2];
};
