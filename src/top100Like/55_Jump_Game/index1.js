/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Runtime: 96 ms, faster than 36.59% of JavaScript online submissions for Jump Game.
// Memory Usage: 44.3 MB, less than 9.07% of JavaScript online submissions for Jump Game.
export default (nums) => {
  if (!nums || nums.length === 0) return false;
  if (nums.length === 1) return true;
  const dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (i <= dp[i - 1]) {
      dp[i] = Math.max(dp[i - 1], i + nums[i]);
      if (dp[i] >= nums.length - 1) {
        return true;
      }
    }
  }
  return false;
};
