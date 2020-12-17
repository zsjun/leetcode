/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */

// Runtime: 96 ms, faster than 96.39% of JavaScript online submissions for Target Sum.
// Memory Usage: 44.7 MB, less than 41.49% of JavaScript online submissions for Target Sum.
export default (nums, S) => {
  let sum = 0;
  for (let i of nums) {
    sum += i;
  }

  //
  if (S > sum || S < -sum) {
    return 0;
  }
  const len = 2 * sum + 1;
  let dp = new Array(len).fill(0);
  // 所有都选择负数
  dp[sum] = 1;

  for (let i = 0; i < nums.length; i++) {
    const next = new Array(len).fill(0);
    for (let k = 0; k < len; k++) {
      if (dp[k] != 0) {
        // 如果k有n中选择，那么当选择+ nums[i]的时候，肯定有n种，当选择- nums[i]的时候，肯定也有n种
        next[k + nums[i]] += dp[k];
        next[k - nums[i]] += dp[k];
      }
    }
    dp = next;
  }
  return dp[sum + S];
};
