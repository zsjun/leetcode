/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// Runtime: 124 ms, faster than 71.25% of JavaScript online submissions for Coin Change.
// Memory Usage: 43 MB, less than 92.47% of JavaScript online submissions for Coin Change.
export default (coins, amount) => {
  if (amount <= 0) return 0;
  const Max = amount + 1;
  const dp = new Array(amount + 1).fill(Max);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
};
