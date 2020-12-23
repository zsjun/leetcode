/**
 * @param {number[]} nums
 * @return {number}
 */

const burst = (memo, nums, left, right) => {
  if (left + 1 === right) return 0;
  if (memo[left][right] > 0) return memo[left][right];
  let ans = 0;
  for (let i = left + 1; i < right; i++) {
    ans = Math.max(ans, nums[left] * nums[i] * nums[right] + burst(memo, nums, left, i) + burst(memo, nums, i, right));
  }
  memo[left][right] = ans;
  return ans;
};

// Runtime: 448 ms, faster than 5.06% of JavaScript online submissions for Burst Balloons.
// Memory Usage: 40.1 MB, less than 89.40% of JavaScript online submissions for Burst Balloons.
export default (nums) => {
  const len = nums.length;
  const copyNums = new Array(len + 2);
  copyNums[0] = 1;
  copyNums[len + 1] = 1;
  for (let i = 0; i < len; i++) {
    copyNums[i + 1] = nums[i];
  }

  const memo = [];
  for (let i = 0; i < len + 2; i++) {
    memo[i] = new Array(len + 2).fill(0);
  }
  // console.log(memo);
  return burst(memo, copyNums, 0, len + 1);
};
