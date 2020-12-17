/**
 * @param {number} n
 * @return {number}
 */
// Input: 2
// Output: 1
// Explanation: 2 = 1 + 1, 1 × 1 = 1.

// Input: 10
// Output: 36
// Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.
// Runtime: 72 ms, faster than 98.97% of JavaScript online submissions for Integer Break.
// Memory Usage: 38.3 MB, less than 82.47% of JavaScript online submissions for Integer Break.
export default (n) => {
  if (n <= 1) return 0;
  if (n === 2) return 1;
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 1; 2 * j <= i; j++) {
      const maxJ = Math.max(j, dp[j]);
      const maxDis = Math.max(i - j, dp[i - j]);
      dp[i] = Math.max(dp[i], maxJ * maxDis);
    }
  }
  // console.log(dp);
  return dp[n];
};
