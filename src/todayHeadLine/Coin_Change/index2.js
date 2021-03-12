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
// Runtime: 120 ms, faster than 80.61% of JavaScript online submissions for Coin Change.
// Memory Usage: 42.7 MB, less than 91.25% of JavaScript online submissions for Coin Change.
export default (coins, amount) => {
  if (amount < 1) return 0;
  const max = amount + 1;
  const res = new Array(max).fill(max);
  res[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
};
