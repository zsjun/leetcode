/**
 * @param {number[]} prices
 * @return {number}
 */

export default (prices) => {
  if (!prices || prices.length < 2) return 0;
  let min = prices[0];
  let res = 0;
  let i = 0;
  let max = 0;

  while (i < prices.length) {
    while (prices[i + 1] <= prices[i]) {
      i++;
      min = prices[i];
    }
    while (prices[i + 1] > prices[i]) {
      i++;
      max = prices[i];
    }
    if (max >= min) {
      res += max - min;
    }
    console.log(min, max);
    i++;
    min = prices[i];
    max = 0;
  }
  return res;
};
