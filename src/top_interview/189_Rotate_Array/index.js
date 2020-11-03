/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
export default (nums, k) => {
  while (k > 0) {
    let temp = nums[nums.length - 1];
    nums.pop();
    nums.unshift(temp);
    k--;
  }
};
