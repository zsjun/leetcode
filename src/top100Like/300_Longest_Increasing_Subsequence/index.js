/**
 * @param {number[]} nums
 * @return {number}
 */
// [10, 9, 2, 5, 3, 7, 101, 18];
// Runtime: 228 ms, faster than 16.18% of JavaScript online submissions for Longest Increasing Subsequence.
// Memory Usage: 39.2 MB, less than 90.20% of JavaScript online submissions for Longest Increasing Subsequence.
export default (nums) => {
  const len = nums.length;
  const dp = new Array(len).fill(1);
  let max = 1;
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
      max = Math.max(max, dp[i]);
    }
  }
  return max;
};
