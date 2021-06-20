/**
 * @param {number[]} nums
 * @return {number}
 */
//  Runtime: 72 ms, faster than 98.78% of JavaScript online submissions for Maximum Product Subarray.
//  Memory Usage: 40.1 MB, less than 28.85% of JavaScript online submissions for Maximum Product Subarray.
export default (nums) => {
  let res = nums[0];

  // imax 和imin 表示
  for (let i = 1, imax = res, imin = res; i < nums.length; i++) {
    // multiplied by a negative makes big number smaller, small number bigger
    // so we redefine the extremums by swapping them
    if (nums[i] < 0) {
      const temp = imax;
      imax = imin;
      imin = temp;
    }

    // max/min product for the current number is either the current number itself
    // or the max/min by the previous number times the current one
    imax = Math.max(nums[i], imax * nums[i]);
    imin = Math.min(nums[i], imin * nums[i]);

    // the newly computed max value is a candidate for our global result
    res = Math.max(res, imax);
  }
  return res;
};
