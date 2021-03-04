/**
 * @param {number[]} prices
 * @return {number}
 */

// 每一天有三种状态，要么买0，要么卖1，要么休息2
// dp[i][0] 表示第i天买股票，dp[i][1]表示第i天卖股票，dp[i][2]表示第i天休息，啥也不干
// dp[i+1][0] = Math.max(dp[i][0],dp[i][2]-prices[i+1])
// dp[i+1][1] = dp[i][0]+prices[i+1]
// dp[i+1][2] = Math.max(dp[i][2], dp[i+1][1])

export default (prices) => {
  if (prices.length < 1) return 0;
  const len = prices.length;
  let s0 = new Array(len).fill(0);
  let s1 = new Array(len).fill(0);
  let s2 = new Array(len).fill(0);
  s0[0] = 0;
  s1[0] = -prices[0];
  s2[0] = Number.MIN_SAFE_INTEGER;
  for (let i = 1; i < len; i++) {
    s0[i] = Math.max(s0[i - 1], s2[i - 1]);
    s1[i] = Math.max(s1[i - 1], s0[i - 1] - prices[i]);
    s2[i] = s1[i - 1] + prices[i];
  }
  console.log(s0, s1, s2);
  return Math.max(s0[len - 1], s2[len - 1]);
};
