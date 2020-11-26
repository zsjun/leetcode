/**
 * @param {number[]} nums
 * @return {number}
 */

export default (nums) => {
  if (nums.length === 1) return nums[0];

  let dp = [];
  dp[0] = nums[0];
  // dp[n] 表示以n结尾的最大的连续子数组
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    if (dp[i] > result) {
      result = dp[i];
    }
  }
  return result;
};
