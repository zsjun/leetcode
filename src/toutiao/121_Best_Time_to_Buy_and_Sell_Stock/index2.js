/**
 * @param {number[]} prices
 * @return {number}
 */
// Runtime: 136 ms, faster than 13.52% of JavaScript online submissions for Best Time to Buy and Sell Stock.
// Memory Usage: 48.7 MB, less than 59.65% of JavaScript online submissions for Best Time to Buy and Sell Stock.
export default (prices) => {
  if (!prices || prices.length === 0) return 0;
  let max = 0;

  let sofarMin = prices[0];
  for (let i = 0; i < prices.length; ++i) {
    if (prices[i] > sofarMin) {
      max = Math.max(max, prices[i] - sofarMin);
    } else {
      sofarMin = prices[i];
    }
  }
  return max;
};
