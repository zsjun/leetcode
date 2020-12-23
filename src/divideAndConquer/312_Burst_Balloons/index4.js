// Runtime: 236 ms, faster than 8.67% of JavaScript online submissions for Burst Balloons.
// Memory Usage: 41.1 MB, less than 53.73% of JavaScript online submissions for Burst Balloons.
export default (nums) => {
  const n = nums.length;
  nums = [1, ...nums, 1];
  const len = nums.length;
  const dp = [];
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len).fill(0);
  }
  // dp[i][j] 表示i到j-1的最大值
  // i2jLen 表示dp[i][j]表示的数组长度
  for (let i2jLen = 1; i2jLen <= n; i2jLen++) {
    for (let i = 0, j = i2jLen + 1; j <= len - 1; i++, j++) {
      for (let k = i + 1; k < j; k++) {
        dp[i][j] = Math.max(dp[i][j], dp[i][k] + nums[i] * nums[k] * nums[j] + dp[k][j]);
      }
    }
  }
  return dp[0][len - 1];
};
