/**
 * @param {number[]} nums
 * @return {number}
 */
// Runtime: 68 ms, faster than 99.68% of JavaScript online submissions for Find the Duplicate Number.
// Memory Usage: 41.1 MB, less than 24.13% of JavaScript online submissions for Find the Duplicate Number.
export default (nums) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return nums[i];
    } else {
      map.set(nums[i], 1);
    }
  }
};
