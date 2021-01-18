/**
 * @param {number[]} nums
 * @return {number}
 */
// Runtime: 264 ms, faster than 5.02% of JavaScript online submissions for Degree of an Array.
// Memory Usage: 42 MB, less than 91.32% of JavaScript online submissions for Degree of an Array.
export default (nums) => {
  const map = new Map();
  let max = 1;
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const count = map.get(nums[i]) + 1;
      max = Math.max(max, count);
      map.set(nums[i], count);
    } else {
      map.set(nums[i], 1);
    }
  }
  let res = Number.MAX_VALUE;
  for (let [key, val] of map) {
    if (val === max) {
      let begin = -1;
      let end = -1;
      for (let i = 0; i < nums.length; i++) {
        if (nums[i] === key && begin === -1) {
          begin = i;
          end = i;
        }
        if (nums[i] === key && begin !== -1) {
          end = i;
        }
      }
      res = Math.min(res, end - begin + 1);
    }
  }
  return res;
};
