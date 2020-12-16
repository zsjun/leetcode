/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// Runtime: 184 ms, faster than 25.00% of JavaScript online submissions for Coin Change.
// Memory Usage: 44.9 MB, less than 19.34% of JavaScript online submissions for Coin Change.
export default (coins, amount) => {
  const len = coins.length;
  const max = amount + 1;
  const dp = [];
  if (amount === 0) return 0;
  for (let i = 0; i <= len; i++) {
    dp[i] = new Array(max).fill(max);
  }
  // coins.sort((a, b) => a - b);
  for (let i = 0; i <= len; i++) {
    dp[i][0] = 0;
  }
  for (let i = 0; i <= amount; i++) {
    dp[0][amount] = max;
  }
  for (let i = 1; i <= len; i++) {
    for (let j = 0; j <= amount; j++) {
      if (j >= coins[i - 1]) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - coins[i - 1]] + 1);
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[len][amount] === max ? -1 : dp[len][amount];
};
