/**
 * @param {number[]} nums
 * @return {number}
 */
//  [10,9,2,5,3,7,101,18]
//  4
// Runtime: 184 ms, faster than 18.89% of JavaScript online submissions for Longest Increasing Subsequence.
// Memory Usage: 39.6 MB, less than 25.03% of JavaScript online submissions for Longest Increasing Subsequence.
export default (nums) => {
  const len = nums.length;
  const dp = new Array(len).fill(1);
  let max = 1;
  for (let i = 1; i < nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
        max = Math.max(dp[i], max);
      } else if (nums[i] === nums[j]) {
        dp[i] = Math.max(dp[i], dp[j]);
        max = Math.max(dp[i], max);
      }
    }
  }
  return max;
};
