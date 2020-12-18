/**
 * @param {number} n
 * @return {number}
 */
// Runtime: 88 ms, faster than 53.27% of JavaScript online submissions for 2 Keys Keyboard.
// Memory Usage: 39.3 MB, less than 31.78% of JavaScript online submissions for 2 Keys Keyboard.
export default (n) => {
  const dp = new Array(n + 1).fill(Number.MAX_VALUE);
  dp[0] = 0;
  dp[1] = 0;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 2] + 2, i);
    } else {
      dp[i] = Math.min(dp[i], i);
      for (let k = 3; k < Math.floor(i / 2); k++) {
        if (i % k === 0) {
          dp[i] = Math.min(dp[i], dp[k] + i / k);
        }
      }
    }
  }
  return dp[n];
};
