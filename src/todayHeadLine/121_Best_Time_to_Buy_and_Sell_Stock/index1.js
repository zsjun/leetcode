/**
 * @param {number[]} prices
 * @return {number}
 */
// Runtime: 6588 ms, faster than 5.02% of JavaScript online submissions for Best Time to Buy and Sell Stock.
// Memory Usage: 50.3 MB, less than 5.61% of JavaScript online submissions for Best Time to Buy and Sell Stock.
export default (prices) => {
  let max = 0;
  const dp = new Array(prices.length).fill(0);
  if (prices[1] > prices[0]) {
    dp[1] = prices[1] - prices[0];
    max = Math.max(max, dp[1]);
  }

  for (let i = 2; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      dp[i] = dp[i - 1] + prices[i] - prices[i - 1];
      max = Math.max(max, dp[i]);
    } else {
      for (let j = i - 2; j >= 0; j--) {
        if (prices[i] > prices[j]) {
          dp[i] = dp[j] + prices[i] - prices[j];
          max = Math.max(max, dp[i]);
          break;
        }
      }
    }
  }
  return max;
};
