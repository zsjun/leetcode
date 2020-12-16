/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// [1, 2, 5], 11;
// Runtime: 124 ms, faster than 63.93% of JavaScript online submissions for Coin Change.
// Memory Usage: 42.7 MB, less than 88.09% of JavaScript online submissions for Coin Change.
export default (coins, amount) => {
  const Max = amount + 1;
  const dp = new Array(amount + 1).fill(Max);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i >= coins[j]) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
};
