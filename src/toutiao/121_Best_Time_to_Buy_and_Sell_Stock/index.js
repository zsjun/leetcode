/**
 * @param {number[]} prices
 * @return {number}
 */
export default (prices) => {
  if (!prices || prices.length === 0) return 0;
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      max = Math.max(prices[i] - prices[j]);
    }
  }
  return max;
};
