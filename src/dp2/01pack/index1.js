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
    for (let j = w; j >= 0; j--) {
      if (j >= weights[i - 1]) {
        dp[j] = Math.max(dp[j], dp[j - weights[i - 1]] + valuse[i - 1]);
      }
    }
  }
  return dp[w];
};
