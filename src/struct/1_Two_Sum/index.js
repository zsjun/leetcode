/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Runtime: 80 ms, faster than 64.85% of JavaScript online submissions for Two Sum.
// Memory Usage: 38.3 MB, less than 95.29% of JavaScript online submissions for Two Sum.
export default (nums, target) => {
  const res = [];
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], i);
    }
    if (map.get(target - nums[i]) >= 0 && i !== map.get(target - nums[i])) {
      res.push(i);
      res.push(map.get(target - nums[i]));
      return res;
    }
  }
};
