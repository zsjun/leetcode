/**
 * @param {number[]} nums
 * @return {number}
 */
// Runtime: 168 ms, faster than 55.06% of JavaScript online submissions for Longest Increasing Subsequence.
// Memory Usage: 39.4 MB, less than 66.46% of JavaScript online submissions for Longest Increasing Subsequence.
const binarySearchPosition = (dp, target) => {
  let low = 1;
  let hi = dp.length - 1;
  while (low <= hi) {
    let mid = Math.floor(low + (hi - low) / 2);
    if (target === dp[mid] || (target < dp[mid] && target > dp[mid - 1])) return mid;
    else if (target < dp[mid]) hi = mid - 1;
    else if (target > dp[mid]) low = mid + 1;
  }
  return -1;
};
export default (nums) => {
  if (nums === null || nums.length === 0) return 0;
  if (nums.length === 1) return 1;
  const dp = new Array(nums.length + 1).fill(Number.MAX_VALUE);
  dp[0] = Number.MIN_SAFE_INTEGER;
  for (let i = 1; i < dp.length; i++) {
    let pos = binarySearchPosition(dp, nums[i - 1]);
    dp[pos] = nums[i - 1];
  }
  for (let i = dp.length - 1; i >= 1; i--) {
    if (dp[i] !== Number.MAX_VALUE) return i;
  }
  return -1;
};
