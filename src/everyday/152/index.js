/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length === 1) return nums[0];
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    let res = 1;
    for (let j = i; j < nums.length; j++) {
      res = res * nums[j];
      max = Math.max(res, max);
    }
  }
  return max;
};
