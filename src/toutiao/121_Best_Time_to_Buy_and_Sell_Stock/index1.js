/**
 * @param {number[]} prices
 * @return {number}
 */
//  Runtime: 156 ms, faster than 9.33% of JavaScript online submissions for Best Time to Buy and Sell Stock.
//  Memory Usage: 51.8 MB, less than 6.25% of JavaScript online submissions for Best Time to Buy and Sell Stock.
export default (prices) => {
  if (!prices || prices.length === 0) return 0;
  let max = 0;
  const len = prices.length;
  const dp = new Array(len).fill(0);

  for (let i = 1; i < prices.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (prices[i] <= prices[j]) {
        dp[i] = dp[j];
        max = Math.max(max, dp[i]);
        break;
      } else {
        dp[i] = Math.max(dp[i], prices[i] - prices[j]);
      }
      max = Math.max(max, dp[i]);
    }
  }
  return max;
};
