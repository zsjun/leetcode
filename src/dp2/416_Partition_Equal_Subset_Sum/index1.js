/**
 * @param {number[]} nums
 * @return {boolean}
 */
// [1,5,11,5]
// 155 11
// 1235

// [1, 2, 3, 5];
// [1, 1, 2, 2];
// Runtime: 108 ms, faster than 91.72% of JavaScript online submissions for Partition Equal Subset Sum.
// Memory Usage: 40.9 MB, less than 75.58% of JavaScript online submissions for Partition Equal Subset Sum.
export default (nums) => {
  const len = nums.length;
  const sum = nums.reduce((a, b) => a + b);
  if (sum % 2 !== 0) return false;
  const target = sum / 2;
  const dp = new Array(target + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i < len; i++) {
    for (let j = target; j >= 0; j--) {
      if (j >= nums[i - 1]) { 
        dp[j] = dp[j] || dp[j - nums[i - 1]];
      } else {
        dp[j] = dp[j];
      }
      if (j === target && dp[j]) {
        return true;
      }
    }
  }
  // console.log(dp);
  return dp[target];
};
