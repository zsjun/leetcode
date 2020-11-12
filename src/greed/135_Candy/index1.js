/**
 * @param {number[]} ratings
 * @return {number}
 */
export default (ratings) => {
  if (!ratings || ratings.length === 0) return 0;
  const len = ratings.length;
  const dp = new Array(len).fill(1);

  for (let i = 1; i < len; i++) {
    if (ratings[i] > ratings[i - 1] && dp[i] <= dp[i - 1]) {
      dp[i] = dp[i - 1] + 1;
    }
  }

  for (let j = len - 2; j >= 0; j--) {
    if (ratings[j] > ratings[j + 1] && dp[j] <= dp[j + 1]) {
      dp[j] = dp[j + 1] + 1;
    }
  }

  return dp.reduce((a, b) => a + b);
};
