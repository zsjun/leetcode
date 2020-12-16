/**
 * @param {number[]} nums
 * @return {boolean}
 */
// [1,5,11,5]
// 155 11
// 1235

// [1, 2, 3, 5];
// [1, 1, 2, 2];
// Runtime: 244 ms, faster than 45.49% of JavaScript online submissions for Partition Equal Subset Sum.
// Memory Usage: 70.8 MB, less than 31.03% of JavaScript online submissions for Partition Equal Subset Sum.
export default (nums) => {
  const len = nums.length;
  const sum = nums.reduce((a, b) => a + b);
  if (sum % 2 !== 0) return false;
  const target = sum / 2;
  const dp = new Array(len);
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(target + 1).fill(false);
  }
  for (let i = 0; i < len; ++i) {
    dp[i][0] = true;
  }
  for (let i = 1; i < len; i++) {
    for (let j = 0; j <= target; ++j) {
      if (j >= nums[i - 1]) {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
      if (j === target && dp[i][j]) {
        return true;
      }
    }
  }
  // console.log(dp);
  return dp[len - 1][target];
};
