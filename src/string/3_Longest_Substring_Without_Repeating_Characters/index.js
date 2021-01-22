/**
 * @param {string} s
 * @return {number}
 */
// Runtime: 112 ms, faster than 76.90% of JavaScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 41.3 MB, less than 90.39% of JavaScript online submissions for Longest Substring Without Repeating Characters.
export default (s) => {
  if (!s) return 0;
  const dp = [];
  let max = 1;
  dp[0] = 1;
  for (let i = 1; i < s.length; i++) {
    let count = 1;
    for (let j = i - 1; j >= i - dp[i - 1]; j--) {
      if (s.charAt(j) === s.charAt(i)) {
        dp[i] = i - j;
        max = Math.max(i - j, max);
        break;
      }
      if (j === i - dp[i - 1]) {
        dp[i] = dp[i - 1] + 1;
        max = Math.max(dp[i], max);
      }
    }
  }
  return max;
};
