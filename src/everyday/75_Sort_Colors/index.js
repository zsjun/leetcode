/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  if (!nums || nums.length === 0) return nums;
  let zeroNums = 0;
  let oneNums = 0;
  for (let val of nums) {
    if (val === 0) {
      zeroNums++;
    }
    if (val === 1) {
      oneNums++;
    }
  }
  // console.log(zeroNums,oneNums)
  for (let i = 0; i < zeroNums; i++) {
    nums[i] = 0;
  }
  for (let i = zeroNums; i < oneNums + zeroNums; i++) {
    nums[i] = 1;
  }
  for (let i = oneNums + zeroNums; i < nums.length; i++) {
    nums[i] = 2;
  }
  return nums;
};
