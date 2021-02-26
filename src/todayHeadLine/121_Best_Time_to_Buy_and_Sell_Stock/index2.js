/**
 * @param {number[]} prices
 * @return {number}
 */
// Runtime: 6588 ms, faster than 5.02% of JavaScript online submissions for Best Time to Buy and Sell Stock.
// Memory Usage: 50.3 MB, less than 5.61% of JavaScript online submissions for Best Time to Buy and Sell Stock.
export default (prices) => {
  let maxCur = 0,
    maxSoFar = 0;
  for (let i = 1; i < prices.length; i++) {
    maxCur = Math.max(0, (maxCur += prices[i] - prices[i - 1]));
    maxSoFar = Math.max(maxCur, maxSoFar);
  }
  return maxSoFar;
};
