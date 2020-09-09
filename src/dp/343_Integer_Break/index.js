/**
 * @param {number} n
 * @return {number}
 */
export default (n) => {
  if (n <= 2) return 1;
  let dp = [];
  dp[0] = 0;
  dp[1] = 0;
  dp[2] = 1;
  for (let i = 3; i <= n; i++) {
    let j = 1;
    if (!dp[i]) {
      dp[i] = 0;
    }
    while (j < i) {
      if (dp[i - j] > i - j) {
        dp[i] = Math.max(dp[i - j] * j, dp[i]);
      } else {
        dp[i] = Math.max((i - j) * j, dp[i]);
      }
      j++;
    }
  }
  return dp[n];
};
