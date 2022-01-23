/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function swap(nums, i, j) {
  const temp = nums[j];
  nums[j] = nums[i];
  nums[i] = temp;
}
var nextPermutation = function (nums) {
  if (!nums || nums.length <= 1) return;
  let j = nums.length - 1;
  // 获取j
  while (nums[j - 1] >= nums[j] && j >= 1) {
    j--;
  }
  // 交换
  for (let m1 = nums.length - 1; m1 >= j; m1--) {
    if (nums[m1] > nums[j - 1]) {
      swap(nums, j - 1, m1);
      break;
    }
  }

  let k = nums.length - 1;
  let m = j;
  //
  while (m < k) {
    swap(nums, k, m);
    k--;
    m++;
  }
};
