/**
 * @param {number[]} prices
 * @return {number}
 */
// Runtime: 88 ms, faster than 45.12% of JavaScript online submissions for Best Time to Buy and Sell Stock with Cooldown.
// Memory Usage: 40.6 MB, less than 17.68% of JavaScript online submissions for Best Time to Buy and Sell Stock with Cooldown.
export default (prices) => {
  const n = prices.length;
  if (n <= 1) return 0;

  // 今天卖了最大利润
  const sell = new Array(n + 1).fill(0);
  // 今天买的最大利润
  const buy = new Array(n + 1).fill(0);
  // 今天休息的最大利润
  const reset = new Array(n + 1).fill(0);
  // 第一天卖的最大利润
  sell[1] = 0;
  // 第一天购买的最大利润
  buy[1] = -prices[0];
  // 第一天休息的最大利润
  reset[1] = 0;

  for (let i = 2; i <= n; i++) {
    // 第i天卖出股票的最大利润
    sell[i] = Math.max(sell[i - 1], reset[i - 1]);

    // 买入的
    buy[i] = Math.max(buy[i - 1], sell[i - 1] - prices[i - 1]);

    // 休息的时候
    reset[i] = buy[i - 1] + prices[i - 1];
  }
  // console.log(sell, reset, buy);
  return Math.max(sell[n], reset[n]);
};
