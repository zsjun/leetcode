/**
 * @param {number[]} prices
 * @return {number}
 */
// Runtime: 96 ms, faster than 32.40% of JavaScript online submissions for Best Time to Buy and Sell Stock.
// Memory Usage: 39.5 MB, less than 24.29% of JavaScript online submissions for Best Time to Buy and Sell Stock.
export default (prices) => {
  const n = prices.length;
  const dp = new Array(n + 1).fill(0);

  for (let i = 2; i <= n; i++) {
    let max = 0;
    for (let j = i - 2; j >= 0; j--) {
      if (prices[j] < prices[i - 1]) {
        max = Math.max(max, prices[i - 1] - prices[j]);
      } else {
        break;
      }
    }
    dp[i] = Math.max(dp[i], max, dp[i - 1]);
  }
  return dp[n];
};
