/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Runtime: 76 ms, faster than 81.38% of JavaScript online submissions for Jump Game II.
// Memory Usage: 38.5 MB, less than 53.83% of JavaScript online submissions for Jump Game II.
export default (nums) => {
  if (!nums || nums.length === 0) return -1;
  if (nums.length === 1) return 0;
  const dp = new Array(nums.length).fill(Number.MAX_VALUE);
  dp[0] = 0;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] >= i - j) {
        dp[i] = Math.min(dp[j] + 1, dp[i]);
      }
    }
  }
  return dp[dp.length - 1];
};
