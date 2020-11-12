/**
 * @param {number[]} ratings
 * @return {number}
 */
export default (ratings) => {
  if (!ratings || ratings.length === 0) return 0;
  const dp = [];
  dp[0] = 1;
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      dp[i] = dp[i - 1] + 1;
    } else {
      if (dp[i - 1] === 1) {
        dp[i] = 1;
        dp[i - 1] = dp[i - 1] + 1;
        for (let j = i - 2; j >= 0; j--) {
          if (ratings[j] > ratings[j + 1]) {
            if (dp[j] <= dp[j + 1]) {
              dp[j] = dp[j + 1] + 1;
            }
          } else if (ratings[j] <= ratings[j + 1]) {
            if (dp[j] >= dp[j + 1] && dp[j + 1] > 1) {
              dp[j] = dp[j + 1] - 1;
            }
          }
        }
      } else {
        dp[i] = dp[i - 1] - 1;
      }
    }
  }
  return dp.reduce((a, b) => a + b);
};
