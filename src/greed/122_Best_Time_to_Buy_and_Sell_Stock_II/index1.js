/**
 * @param {number[]} prices
 * @return {number}
 */

export default (prices) => {
  if (!prices || prices.length < 2) return 0;
  const dp = [];
  dp[0] = 0;
  if (prices[1] > prices[0]) {
    dp[1] = prices[1] - prices[0];
  } else {
    dp[1] = 0;
  }
  for (let i = 2; i < prices.length; i++) {
    if (prices[i] <= prices[i - 1]) {
      dp[i] = dp[i - 1];
    } else {
      let j = i - 1;
      while (prices[j - 1] < prices[j]) {
        j--;
      }
      if (dp[j - 1] >= 0) {
        dp[i] = dp[j - 1] + prices[i] - prices[j];
      } else {
        dp[i] = prices[i] - prices[j];
      }
    }
  }
  return dp[prices.length - 1];
};
