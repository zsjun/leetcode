/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 超时
const canReachLastIndex = (begin, nums, dp) => {
  if (begin === nums.length - 1) {
    return true;
  }
  if (nums[begin] === 0 && begin !== nums.length - 1) {
    return false;
  }
  let res = canReachLastIndex(begin + 1, nums, dp);
  if (res) {
    dp[begin + 1] = 1;
    return true;
  }
  for (let i = 2; i <= nums[begin] && i < nums.length; i++) {
    if (dp[begin + i] === 1) {
      return true;
    }
    if (canReachLastIndex(begin + i, nums, dp)) {
      dp[begin + i] === 1;
      return true;
    } else {
      res = false;
    }
  }
  return res;
};
export default (nums) => {
  // 0表示不能到达，1表示可以到达最后
  const dp = new Array(nums.length).fill(0);
  return canReachLastIndex(0, nums, dp);
};
