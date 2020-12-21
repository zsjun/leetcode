/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
// 辅函数
const maxProfits = (prices) => {
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1];
    }
  }
  return maxProfit;
};

// Runtime: 92 ms, faster than 83.33% of JavaScript online submissions for Best Time to Buy and Sell Stock IV.
// Memory Usage: 40.3 MB, less than 86.23% of JavaScript online submissions for Best Time to Buy and Sell Stock IV.
export default (k, prices) => {
  const len = prices.length;
  if (len < 2) {
    return 0;
  }
  // 如果k的天数大于len
  if (k >= len) {
    return maxProfits(prices);
  }
  const dp = [];
  for (let i = 0; i <= k; i++) {
    dp[i] = new Array(len + 1).fill(0);
  }
  for (let i = 1; i <= k; i++) {
    // 默认第一天购买
    let tmpMax = -prices[0];
    for (let j = 2; j <= len; j++) {
      // 获取在前面0-j之间购买股票的最大利润
      for (let k1 = 2; k1 < j; k1++) {
        tmpMax = Math.max(tmpMax, dp[i - 1][k1] - prices[k1 - 1]);
      }
      // 有两种选择，第一种是啥也不干dp[i][j - 1]，第二种是如果在j天卖出股票的时候，必须在0到j之间购买一次
      dp[i][j] = Math.max(dp[i][j - 1], prices[j - 1] + tmpMax);
      // tmpMax = Math.max(tmpMax, dp[i - 1][j - 1] - prices[j - 1]);
    }
  }
  return dp[k][len];
};
