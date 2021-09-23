/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
//  Runtime: 348 ms, faster than 12.01% of JavaScript online submissions for Coin Change.
//  Memory Usage: 46.9 MB, less than 14.74% of JavaScript online submissions for Coin Change.
export default (coins, amount) => {
  if (amount <= 0) return 0;
  coins.sort((a, b) => a - b);
  const res = new Array(amount + 1).fill(Number.MAX_VALUE);
  for (let i = 0; i < coins.length; i++) {
    res[coins[i]] = 1;
  }
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i > coins[j]) {
        res[i] = Math.min(res[i], res[i - coins[j]] + 1);
      }
    }
  }
  return res[amount] === Number.MAX_VALUE ? -1 : res[amount];
};
