/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 76 ms 40 MB
// dp[i] 表示到达i剩余步数
// 到达dp[i-1] i-1 剩余的步数，
// 题目首先要理解清楚
export default (nums) => {
  const len = nums.length;
  let dp = new Array(len).fill(0);
  for (let i = 1; i < len; i++) {
    dp[i] = Math.max(dp[i - 1], nums[i - 1]) - 1;
    if (dp[i] < 0) return false;
  }
  return true;
};
