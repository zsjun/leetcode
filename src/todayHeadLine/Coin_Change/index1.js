/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// const helper = (coins, rem, count) => {
//   if (rem < 0) return -1; // not valid
//   if (rem === 0) return 0; // completed
//   if (count[rem - 1] !== 0) return count[rem - 1]; // already computed, so reuse
//   let min = Number.MAX_VALUE;
//   for (let coin of coins) {
//     let res = helper(coins, rem - coin, count);
//     if (res >= 0 && res < min) min = 1 + res;
//   }
//   count[rem - 1] = min === Number.MAX_VALUE ? -1 : min;
//   return count[rem - 1];
// };
// Runtime: 124 ms, faster than 73.42% of JavaScript online submissions for Coin Change.
// Memory Usage: 43 MB, less than 82.68% of JavaScript online submissions for Coin Change.
export default (coins, amount) => {
  if (amount < 1) return 0;
  const res = new Array(amount + 1).fill(-1);
  for (let i = 0; i < coins.length; i++) {
    res[coins[i]] = 1;
  }
  for (let i = 2; i <= amount; i++) {
    if (res[i] === -1) {
      let min = Number.MAX_VALUE;
      for (let j = i - 1; j >= Math.floor(i / 2); j--) {
        if (i % j === 0 && res[j] !== -1) {
          min = Math.min(min, Math.floor(i / j) * res[j]);
        }
        if (res[i - j] && res[j] !== -1 && res[i - j] !== -1) {
          min = Math.min(min, res[j] + res[i - j]);
        }
      }
      res[i] = min === Number.MAX_VALUE ? -1 : min;
    }
  }
  return res[amount];
};
