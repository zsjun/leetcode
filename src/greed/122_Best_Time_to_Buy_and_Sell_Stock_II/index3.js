/**
 * @param {number[]} prices
 * @return {number}
 */

export default (prices) => {
  let n = prices.length,
    lastBuy = -A[0],
    lastSold = 0;
  if (n === 0) return 0;

  for (let i = 1; i < n; i++) {
    let curBuy = Math.max(lastBuy, lastSold - A[i]);
    let curSold = Math.max(lastSold, lastBuy + A[i]);
    lastBuy = curBuy;
    lastSold = curSold;
  }

  return lastSold;
};
