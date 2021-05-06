/**
 * @param {number[]} nums
 * @return {number}
 */
// Runtime: 88 ms, faster than 48.54% of JavaScript online submissions for Majority Element.
// Memory Usage: 40.8 MB, less than 76.34% of JavaScript online submissions for Majority Element.
export default (nums) => {
  const map = new Map();
  const len = nums.length;
  if (len <= 1) return nums[0];
  const max = Math.ceil(len / 2);

  for (let i = 0; i < len; i++) {
    if (map.has(nums[i])) {
      const temp = map.get(nums[i]) + 1;
      if (temp >= max) {
        return nums[i];
      } else {
        map.set(nums[i], max);
      }
    } else {
      map.set(nums[i], 1);
    }
  }
};
