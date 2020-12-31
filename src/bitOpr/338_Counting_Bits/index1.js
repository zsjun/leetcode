/**
 * @param {number} num
 * @return {number[]}
 */

// Runtime: 92 ms, faster than 94.32% of JavaScript online submissions for Counting Bits.
// Memory Usage: 44.8 MB, less than 34.70% of JavaScript online submissions for Counting Bits.
// dp[i] 表示i拥有的个数，那么很容易想到如果i第一位是0，dp[i] = dp[i>>1] ,如果i第一位为1，则dp[i] = dp[i>>1]
export default (num) => {
  const dp = [];
  dp[0] = 0;
  if (num === 0) {
    return dp;
  }
  dp[1] = 1;
  if (num === 1) {
    return dp;
  }
  for (let i = 2; i <= num; i++) {
    dp[i] = dp[i >> 1] + (i & 1);
  }
  return dp;
};
