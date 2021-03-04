/**
 * @param {number[]} prices
 * @return {number}
 */
// 1, 2, 3, 0, 2;
// Runtime: 80 ms, faster than 88.14% of JavaScript online submissions for Best Time to Buy and Sell Stock with Cooldown.
// Memory Usage: 39 MB, less than 81.44% of JavaScript online submissions for Best Time to Buy and Sell Stock with Cooldown.
export default (prices) => {
  if (prices.length < 1) return 0;
  const len = prices.length;
  let s0 = 0;
  let s1 = -prices[0];
  let s2 = Number.MIN_SAFE_INTEGER;
  for (let i = 1; i < len; i++) {
    let preS2 = s2;
    let preS0 = s0;
    s2 = s1 + prices[i];
    s0 = Math.max(s0, preS2);
    s1 = Math.max(s1, preS0 - prices[i]);
  }
  return Math.max(s0, s2);
};
