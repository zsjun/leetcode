/**
 * @param {number[]} prices
 * @return {number}
 */
// Runtime: 6588 ms, faster than 5.02% of JavaScript online submissions for Best Time to Buy and Sell Stock.
// Memory Usage: 50.3 MB, less than 5.61% of JavaScript online submissions for Best Time to Buy and Sell Stock.
export default (prices) => {
  let max = 0;
  let minVal = Number.MAX_VALUE;
  for (let i = 0; i < prices.length; i++) {
    minVal = Math.min(minVal, prices[i]);
    max = Math.max(max, prices[i] - minVal);
  }
  return max;
};
