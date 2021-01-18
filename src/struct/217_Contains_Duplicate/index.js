/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Runtime: 96 ms, faster than 45.58% of JavaScript online submissions for Contains Duplicate.
// Memory Usage: 45 MB, less than 54.79% of JavaScript online submissions for Contains Duplicate.
export default (nums) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return true;
    } else {
      map.set(nums[i], 1);
    }
  }

  return false;
};
