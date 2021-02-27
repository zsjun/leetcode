/**
 * @param {number[]} prices
 * @return {number}
 */
// Runtime: 80 ms, faster than 80.89% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
// Memory Usage: 39.4 MB, less than 26.99% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
export default (prices) => {
  let res = 0;
  let maxCur = 0;
  for (let i = 1; i < prices.length; i++) {
    maxCur += Math.max(0, prices[i] - prices[i - 1]);

    if (maxCur > 0) {
      res += maxCur;
      maxCur = 0;
    }
  }
  return res;
};
