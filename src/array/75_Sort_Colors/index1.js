/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const swap = (nums, i, j) => {
  const tmp = nums[j];
  nums[j] = nums[i];
  nums[i] = tmp;
};
export default (nums) => {
  const len = nums.length;
  let right = len - 1;
  let left = 0;
  for (let i = 0; i < len; i++) {
    while (nums[i] === 2 && i < right) {
      swap(nums, i, right);
      right--;
    }
    while (nums[i] === 0 && left < i) {
      swap(nums, left, i);
      left++;
    }
  }
  return nums;
};
