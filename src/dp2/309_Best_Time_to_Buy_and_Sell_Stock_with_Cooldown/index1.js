/**
 * @param {number[]} prices
 * @return {number}
 */

// Runtime: 92 ms, faster than 34.36% of JavaScript online submissions for Best Time to Buy and Sell Stock with Cooldown.
// Memory Usage: 41 MB, less than 9.82% of JavaScript online submissions for Best Time to Buy and Sell Stock with Cooldown.
export default (prices) => {
  const n = prices.length;
  if (n <= 1) return 0;

  // sell之后reset，reset之后reset
  const s0 = new Array(n + 1).fill(0);
  // buy之后reset，reset之后reset
  const s1 = new Array(n + 1).fill(0);
  // sell之后
  const s2 = new Array(n + 1).fill(0);
  s0[1] = 0;
  s1[1] = -prices[0];
  s2[1] = 0;

  for (let i = 2; i <= n; i++) {
    s0[i] = Math.max(s0[i - 1], s2[i - 1]);
    s1[i] = Math.max(s0[i - 1] - prices[i - 1], s1[i - 1]);
    s2[i] = s1[i - 1] + prices[i - 1];
  }
  return Math.max(s0[n], s2[n]);
};
