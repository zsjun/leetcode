/**
 * @param {number[]} weights
 * @param {number[]} values
 * @param {number} n
 * @param {number} w
 * @return {number}
 */
export default (weights, valuse, n, w) => {
  const dp = [];
  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(w + 1).fill(0);
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= w; j++) {
      // 如果选择，
      if (j >= weights[i - 1]) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - weights[i - 1]] + valuse[i - 1]);
      } else {
        //如果不选择
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[n][w];
};
