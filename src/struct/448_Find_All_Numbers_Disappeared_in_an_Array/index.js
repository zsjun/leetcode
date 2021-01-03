/**
 * @param {number[]} nums
 * @return {number[]}
 */

const swap = (nums, i, j) => {
  const temp = nums[j];
  nums[j] = nums[i];
  nums[i] = temp;
};
// Runtime: 204 ms, faster than 29.69% of JavaScript online submissions for Find All Numbers Disappeared in an Array.
// Memory Usage: 47.3 MB, less than 48.68% of JavaScript online submissions for Find All Numbers Disappeared in an Array.
export default (nums) => {
  const len = nums.length;
  const res = new Array(len).fill(0);
  for (let i = 0; i < nums.length; i++) {
    if (res[nums[i] - 1] === 0) {
      res[nums[i] - 1] = nums[i];
    }
  }

  for (let i = 0; i < res.length; i++) {
    if (res[i] === 0) {
      res[i] = i + 1;
    } else {
      res[i] = 0;
    }
  }

  return res.filter((item) => item !== 0);
};
