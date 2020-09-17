export default (nums) => {
  if (nums.length === 0 || !nums) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length > 1) {
    return Math.max(rob(nums, 0, nums.length - 2), rob(nums, 1, nums.length - 1));
  }
};

function rob(nums, begin, end) {
  if (nums.length === 0 || !nums) return 0;
  let dp = [];
  dp[begin] = nums[begin];
  dp[begin + 1] = Math.max(nums[begin], nums[begin + 1]);
  for (let i = begin + 2; i <= end; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp[end];
}
