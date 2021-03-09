/**
 * @param {number[]} nums
 * @return {number}
 */
// Runtime: 168 ms, faster than 55.06% of JavaScript online submissions for Longest Increasing Subsequence.
// Memory Usage: 39.4 MB, less than 66.46% of JavaScript online submissions for Longest Increasing Subsequence.
export default (nums) => {
  const len = nums.length;
  const dp = new Array(len).fill(1);
  let max = 1;
  for (let i = 1; i < len; i++) {
    dp[i] = 1;
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    max = Math.max(dp[i], max);
  }
  return max;
};
