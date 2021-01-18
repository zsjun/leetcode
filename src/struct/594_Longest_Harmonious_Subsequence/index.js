/**
 * @param {number[]} nums
 * @return {number}
 */
// Runtime: 112 ms, faster than 92.50% of JavaScript online submissions for Longest Harmonious Subsequence.
// Memory Usage: 48.4 MB, less than 51.88% of JavaScript online submissions for Longest Harmonious Subsequence.
export default (nums) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const count = map.get(nums[i]) + 1;
      map.set(nums[i], count);
    } else {
      map.set(nums[i], 1);
    }
  }
  let max = 0;
  for (let [key, val] of map) {
    const tempMax = map.get(key + 1) ? map.get(key + 1) : 0;
    const tempMin = map.get(key - 1) ? map.get(key - 1) : 0;
    if (tempMax > 0) {
      max = Math.max(max, val + tempMax);
    }
    if (tempMin > 0) {
      max = Math.max(max, val + tempMin);
    }
  }
  return max;
};
