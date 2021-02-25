/**
 * @param {number[]} nums
 * @return {number}
 */
//  Runtime: 204 ms, faster than 7.51% of JavaScript online submissions for Maximum Subarray.
//  Memory Usage: 39.2 MB, less than 47.38% of JavaScript online submissions for Maximum Subarray.
export default (nums) => {
  if (nums.length === 1) return nums[0];
  const len = nums.length;
  const dp = new Array(len).fill(Number.MIN_SAFE_INTEGER);
  dp[0] = nums[0];
  let max = dp[0];

  for (let i = 1; i < len; i++) {
    dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
    max = Math.max(max, dp[i]);
  }

  return max;
};
