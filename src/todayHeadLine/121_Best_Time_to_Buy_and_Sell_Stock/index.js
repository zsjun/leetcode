/**
 * @param {number[]} prices
 * @return {number}
 */

export default (prices) => {
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] > prices[i]) {
        max = Math.max(max, prices[j] - prices[i]);
      }
    }
  }
  return max;
};
