/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */

// Runtime: 176 ms, faster than 76.29% of JavaScript online submissions for Target Sum.
// Memory Usage: 44.4 MB, less than 52.32% of JavaScript online submissions for Target Sum.
export default (nums, S) => {
  let sum = 0;
  for (let i of nums) {
    sum += i;
  }

  // 如果大于最大的和小于最小的
  if (S > sum || S < -sum) {
    return 0;
  }
  const dp = [];
  const len = nums.length;
  const maxN = 2 * sum + 1;
  for (let i = 0; i <= len; i++) {
    dp[i] = new Array(maxN).fill(0);
  }
  // 这里指全部选择负数的时候，只有一种选择
  dp[0][0 + sum] = 1;
  for (let i = 1; i <= nums.length; i++) {
    for (let j = 0; j < maxN; j++) {
      // 选择-nums[i - 1]
      if (j + nums[i - 1] < maxN) {
        dp[i][j] += dp[i - 1][j + nums[i - 1]];
      }
      // 选择+nums[i - 1]
      if (j - nums[i - 1] >= 0) {
        dp[i][j] += dp[i - 1][j - nums[i - 1]];
      }
    }
  }
  // console.log(dp);
  return dp[nums.length][sum + S];
};
