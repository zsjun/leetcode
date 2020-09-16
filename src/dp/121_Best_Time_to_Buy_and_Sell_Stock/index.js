/**
 * @param {number[]} prices
 * @return {number}
 */
export default (nums) => {
let dp = [];
    if (nums.length === 0 || !nums) return 0
  dp[1] = 0
  dp[2] = nums[1] > nums[0] ? nums[1] -nums[0] : 0;
  let min = Math.min(nums[0], nums[1]);

  for(let i = 2;i<nums.length;i++) {
     dp[i+1] = Math.max(dp[i])
    if (nums[i]>min) {
      dp[i+1] = Math.max(dp[i], nums[i]-min);
     
    }else {
      min = nums[i];
      dp[i+1] = dp[i];

    }


  }
  return dp[nums.length];
}

