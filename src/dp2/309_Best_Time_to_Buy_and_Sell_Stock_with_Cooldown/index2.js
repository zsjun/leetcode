/**
 * @param {number[]} prices
 * @return {number}
 */

// Runtime: 84 ms, faster than 64.42% of JavaScript online submissions for Best Time to Buy and Sell Stock with Cooldown.
// Memory Usage: 38.8 MB, less than 72.39% of JavaScript online submissions for Best Time to Buy and Sell Stock with Cooldown.
export default (prices) => {
  const n = prices.length;
  if (n <= 1) return 0;

  // sell之后reset，reset之后reset
  let s0 = 0;
  // buy之后reset，reset之后reset
  let s1 = -prices[0];
  // sell之后
  let s2 = 0;

  for (let i = 1; i < n; i++) {
    const last_s2 = s2;
    // 按照状态机顺序转换
    s2 = s1 + prices[i];
    s1 = Math.max(s0 - prices[i], s1);
    s0 = Math.max(s0, last_s2);
  }
  // console.log(s0, s2);
  return Math.max(s0, s2);
};
