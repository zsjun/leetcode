/**
 * @param {number[]} prices
 * @return {number}
 */
// [7, 1, 5, 3, 6, 4][(1, 2, 3, 4, 5)];
// Runtime: 76 ms, faster than 87.13% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
// Memory Usage: 40.4 MB, less than 12.98% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
export default (prices) => {
  if (!prices || prices.length === 0) return 0;
  let res = 0;
  let min = prices[0];
  let index = 1;
  while (index < prices.length) {
    if (prices[index] > min) {
      index++;
      while (index < prices.length) {
        if (prices[index] > prices[index - 1]) {
          index++;
        } else {
          break;
        }
      }
      res += prices[index - 1] - min;
      min = prices[index];
    } else {
      min = prices[index];
      index++;
    }
  }
  return res;
};
