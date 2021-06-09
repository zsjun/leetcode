/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//  Runtime: 76 ms, faster than 85.45% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
//  Memory Usage: 39.9 MB, less than 34.09% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
export default (nums, target) => {
  if (!nums || nums.length === 0) return [-1, -1];
  let low = 0;
  let high = nums.length - 1;
  let res = [];
  while (low <= high) {
    const mid = (high + low) >> 1;
    if (nums[mid] === target) {
      let resLow = mid;
      let resHigh = mid;
      while (nums[resLow - 1] === target && resLow >= 1) {
        --resLow;
      }
      while (nums[resHigh + 1] === target && resHigh + 1 < nums.length) {
        ++resHigh;
      }
      return [resLow, resHigh];
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return [-1, -1];
};
