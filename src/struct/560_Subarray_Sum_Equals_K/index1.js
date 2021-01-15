/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Runtime: 108 ms, faster than 73.38% of JavaScript online submissions for Subarray Sum Equals K.
// Memory Usage: 46.7 MB, less than 67.96% of JavaScript online submissions for Subarray Sum Equals K.
export default (nums, k) => {
  if (nums.length === 1 && nums[0] !== k) return 0;
  const map = new Map();
  map.set(0, 1);
  let res = 0;
  let copyNums = 0;
  for (let i = 0; i < nums.length; i++) {
    copyNums = copyNums + nums[i];
    if (map.has(copyNums - k)) {
      res += map.get(copyNums - k);
    }
    if (map.has(copyNums)) {
      const count = map.get(copyNums) + 1;
      map.set(copyNums, count);
    } else {
      map.set(copyNums, 1);
    }
  }
  return res;
};
