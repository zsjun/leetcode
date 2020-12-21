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

// Runtime: 84 ms, faster than 98.55% of JavaScript online submissions for Best Time to Buy and Sell Stock IV.
// Memory Usage: 39.8 MB, less than 92.03% of JavaScript online submissions for Best Time to Buy and Sell Stock IV.
export default (k, prices) => {
  const len = prices.length;
  if (len < 2) {
    return 0;
  }
  // 如果k的天数大于len
  if (k >= len) {
    return maxProfits(prices);
  }
  const buy = new Array(k + 1).fill(-Infinity);
  const sell = new Array(k + 1).fill(0);
  // buy[0] = -prices[0];
  // sell[0] = 0;
  for (let i = 1; i <= k; i++) {
    buy[i] = -prices[0];
    sell[i] = 0;
  }

  for (let i = 1; i < len; i++) {
    for (let j = 1; j <= k; j++) {
      let preBuy = buy[j];
      buy[j] = Math.max(buy[j], sell[j - 1] - prices[i]);
      sell[j] = Math.max(sell[j], preBuy + prices[i]);
    }
  }
  return sell[k];
};
