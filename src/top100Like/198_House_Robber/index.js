/**
 * @param {number[]} nums
 * @return {number}
 */
//  Runtime: 72 ms, faster than 91.68% of JavaScript online submissions for House Robber.
//  Memory Usage: 38.4 MB, less than 70.69% of JavaScript online submissions for House Robber.
// 定义好各种状态
export default (nums) => {
  // 前面一个的状态,当前的最大值
  const dp1 = new Array(nums.length);
  // 前面一个的状态，不抢劫的状态
  const dp2 = new Array(nums.length);

  dp1[0] = nums[0];
  dp2[0] = 0;

  for (let i = 1; i < nums.length; i++) {
    if (i >= 2) {
      // 当前状态抢劫，前面不抢劫的最大值加上当前的值，
      dp1[i] = Math.max(dp2[i - 1] + nums[i], dp1[i - 1]);
    } else {
      dp1[i] = Math.max(nums[0], nums[1]);
    }

    dp2[i] = dp1[i - 1];
  }
  // console.log(dp1,dp2)
  return dp1[nums.length - 1];
};
