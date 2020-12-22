export default (nums) => {
  const vals = [1, ...nums, 1];
  const n = nums.length;
  const dp = [];
  for (let i = 0; i < n + 2; i++) {
    dp[i] = new Array(n + 2).fill(0);
  }
  // dp[i][j] 表示i到j-1的最大值
  for (let len = 1; len <= n; len++) {
    for (let i = 1, j = len; j <= n; i++, j++) {
      for (let k = i; k <= j; k++) {
        dp[i][j] = Math.max(dp[i][j], dp[i][k - 1] + vals[i - 1] * vals[k] * vals[j + 1] + dp[k + 1][j]);
        console.log(dp);
      }
    }
  }
  return dp[1][n];
};
