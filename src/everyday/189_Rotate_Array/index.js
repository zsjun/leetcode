/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};
var rotate = function (nums, k) {
  const len = nums.length;
  while (k > 0) {
    const temp = nums[len - 1];
    for (let i = len - 1; i > 0; i--) {
      nums[i] = nums[i - 1];
    }
    nums[0] = temp;
    k--;
  }
};
