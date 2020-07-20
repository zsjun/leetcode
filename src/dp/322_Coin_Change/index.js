/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
export default (coins, amount) => {
  if (amount === 0) return 0;
  let dp = [];
  coins.sort((a, b) => a - b);
  for (let i = 0; i <= amount; i++) {
    if (i < coins[0]) {
      dp[i] = Infinity;
    } else {
      let min = Infinity;
      for (let k = 0; k < coins.length; k++) {
        if (i > coins[k] && k < coins.length) {
          while (i > coins[k]) {
            min = Math.min(min, dp[i - coins[k]]);
            k++;
          }
          if (i === coins[k]) {
            min = 0;
            break;
          }
        } else if (i === coins[k]) {
          min = 0;
          break;
        }
      }
      if (min === Infinity) {
        dp[i] = Infinity;
      } else {
        dp[i] = min + 1;
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};
