/**
 * @param {number[]} nums
 * @return {number}
 */
// Runtime: 88 ms, faster than 61.43% of JavaScript online submissions for Longest Consecutive Sequence.
// Memory Usage: 40.9 MB, less than 58.81% of JavaScript online submissions for Longest Consecutive Sequence.
export default (nums) => {
  const map = new Map();
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      const left = map.get(nums[i] - 1) ? map.get(nums[i] - 1) : 0;
      const right = map.get(nums[i] + 1) ? map.get(nums[i] + 1) : 0;
      const sum = left + right + 1;
      map.set(nums[i], sum);
      res = Math.max(res, sum);
      map.set(nums[i] - left, sum);
      map.set(nums[i] + right, sum);
    } else {
      continue;
    }
  }

  return res;
};
