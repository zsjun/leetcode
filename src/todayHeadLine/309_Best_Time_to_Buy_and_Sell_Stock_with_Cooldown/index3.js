/**
 * @param {number[]} prices
 * @return {number}
 */

// 每一天有三种状态，要么买入0，要么卖出股票1，要么啥也不干休息2
// dp[i][0] 表示第i天买入股票，dp[i][1]表示第i天卖出，dp[i][2]表示第i天休息
// 第i天如果买入股票的最大值要么是今天不买入，要么是第i-2天买入股票后的最大值减去当天的股票价格
// dp[i][0] = Math.max(dp[i - 1][0], dp[i - 2][1] - prices[i]);
// 第i天如果卖出股票的最大值要么是上次的值，要么是第i-1天买入股票后的最大值在今天卖出
// dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
// 第i天如果休息的最大值，要么是上次的最大值，要么就是今天卖出股票的最大值
// dp[i][2] = Math.max(dp[i - 1][2], dp[i][1]);

// Runtime: 76 ms, faster than 95.88% of JavaScript online submissions for Best Time to Buy and Sell Stock with Cooldown.
// Memory Usage: 40.4 MB, less than 39.18% of JavaScript online submissions for Best Time to Buy and Sell Stock with Cooldown.
export default (prices) => {
  if (prices.length <= 1) return 0;
  const len = prices.length;
  const buy = new Array(len);
  const sell = new Array(len);
  const solid = new Array(len);

  buy[0] = 0;
  sell[0] = -prices[0];
  solid[0] = Number.MIN_SAFE_INTEGER;

  for (let i = 1; i < len; i++) {
    buy[i] = Math.max(buy[i - 1], solid[i - 1]);
    sell[i] = Math.max(sell[i - 1], buy[i - 1] - prices[i]);
    solid[i] = Math.max(solid[i - 1], sell[i - 1] + prices[i]);
  }
  return Math.max(solid[len - 1], buy[len - 1]);
};
