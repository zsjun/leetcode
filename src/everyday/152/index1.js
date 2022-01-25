/**
 * @param {number[]} nums
 * @return {number}
 */

var maxProduct = function (nums) {
  let res = nums[0];

  let imax = res;
  let imin = res;
  for (let i = 1; i < nums.length; i++) {
    // 如果nums[i]是负数，交换前面的最大和最小
    if (nums[i] < 0) {
      const temp = imax;
      imax = imin;
      imin = temp;
    }

    imax = Math.max(nums[i], imax * nums[i]);
    imin = Math.min(nums[i], imin * nums[i]);

    res = Math.max(res, imax);
  }
  return res;
};
