/**
 * @param {number[]} prices
 * @return {number}
 */
// Runtime: 80 ms, faster than 80.89% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
// Memory Usage: 39.4 MB, less than 26.99% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
export default (prices) => {
  let res = 0;
  let minVal = Number.MAX_VALUE;
  let maxVal = 0;
  let i = 0;
  while (i < prices.length) {
    while (prices[i] <= minVal) {
      minVal = prices[i];
      ++i;
    }
    while (prices[i] >= maxVal) {
      maxVal = prices[i];
      ++i;
    }
    if (maxVal > minVal) {
      res += maxVal - minVal;
    }
    minVal = Number.MAX_VALUE;
    maxVal = 0;
  }
  return res;
};
