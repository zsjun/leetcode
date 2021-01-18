/**
 * @param {number[]} nums
 * @return {number}
 */
// Runtime: 104 ms, faster than 50.23% of JavaScript online submissions for Degree of an Array.
// Memory Usage: 43.8 MB, less than 45.21% of JavaScript online submissions for Degree of an Array.
export default (nums) => {
  const map = new Map();
  const firstMap = new Map();
  let res = 0;
  let degree = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (!firstMap.has(nums[i])) {
      firstMap.set(nums[i], i);
    }

    if (map.has(nums[i])) {
      const count = map.get(nums[i]) + 1;
      map.set(nums[i], count);
    } else {
      map.set(nums[i], 1);
    }
    if (map.get(nums[i]) > degree) {
      degree = map.get(nums[i]);
      res = i - firstMap.get(nums[i]) + 1;
    } else if (map.get(nums[i]) === degree) {
      res = Math.min(res, i - firstMap.get(nums[i]) + 1);
    }
  }
  return res;
};
