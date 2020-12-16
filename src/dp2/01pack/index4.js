/**
 * @param {number[]} weights
 * @param {number[]} values
 * @param {number} n
 * @param {number} w
 * @return {number}
 */
export default (weights, valuse, n, w) => {
  const dp = new Array(w + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= w; j++) {
      // 如果选择，
      if (j >= weights[i - 1]) {
        dp[j] = Math.max(dp[j], [j - weights[i]] + valuse[i]);
      }
    }
  }
  return dp[w];
};
