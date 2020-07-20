/**
 * @param {number[]} nums
 * @return {number}
 */
export default (nums) => {
  if (!nums || nums.length === 0) return 0;
  if (nums.length === 1) return 1;
  let dp = [1];
  let max = 1;
  for (let i = 1; i < nums.length; i++) {
    let k = i - 1;
    let temp = 0;
    while (k >= 0) {
      if (nums[i] > nums[k]) {
        temp = Math.max(temp, dp[k]);
        k--;
      } else if (nums[i] === nums[k] && temp === 0) {
        temp = dp[k] - 1;
        break;
      } else {
        k--;
      }
    }

    if (temp !== 0) {
      dp[i] = temp + 1;
      max = Math.max(max, dp[i]);
    } else {
      dp[i] = 1;
    }
  }
  console.log(dp);
  return max;
};
