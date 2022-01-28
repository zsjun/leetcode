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
  const newK = k % len;
  let j = len=1;
  while(j>=0) {
    
  }
};
