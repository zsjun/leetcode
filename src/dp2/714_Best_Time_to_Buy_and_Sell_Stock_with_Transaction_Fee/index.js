/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */

// Runtime: 92 ms, faster than 86.05% of JavaScript online submissions for Best Time to Buy and Sell Stock with Transaction Fee.
// Memory Usage: 47.4 MB, less than 77.91% of JavaScript online submissions for Best Time to Buy and Sell Stock with Transaction Fee.
export default (prices, fee) => {
  let s0 = 0;
  let s1 = -prices[0];
  let s2 = 0;

  for (let i = 1; i < prices.length; i++) {
    let preS2 = s2;
    s2 = s1 + prices[i] - fee;
    s0 = Math.max(s0, preS2);
    s1 = Math.max(s0 - prices[i], s1);
  }
  return Math.max(s0, s2);
};
