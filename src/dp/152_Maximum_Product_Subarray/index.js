/**
 * @param {number[]} nums
 * @return {number}
 */
export default (nums) => {
  let dp = [];
  dp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let maxNum = 1;
    dp[i] = nums[i];
    for (let j = i; j >= 0; j--) {
      maxNum = maxNum * nums[j];
      if (maxNum > dp[i - 1] || (dp[i] && maxNum > dp[i])) {
        dp[i] = maxNum;
      }
      // if (maxNum < dp[i - 1] && maxNum !== 1 && maxNum !== nums[j]) {
      //   break;
      // }
    }
    dp[i] = Math.max(dp[i], dp[i - 1]);
  }
  return dp[nums.length - 1];
};
