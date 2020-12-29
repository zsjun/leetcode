/**
 * @param {number[]} nums
 * @return {number}
 */
// Runtime: 84 ms, faster than 78.37% of JavaScript online submissions for Majority Element.
// Memory Usage: 40.7 MB, less than 82.56% of JavaScript online submissions for Majority Element.
export default (nums) => {
  if (nums.length === 1) return nums[0];
  const map = new Map();
  const max = Math.floor(nums.length / 2);
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const tempNum = map.get(nums[i]) + 1;
      map.set(nums[i], tempNum);
      if (tempNum > max) {
        return nums[i];
      }
    } else {
      map.set(nums[i], 1);
    }
  }
};
