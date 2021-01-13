/**
 * @param {number[]} nums
 * @return {number}
 */
// Runtime: 76 ms, faster than 95.99% of JavaScript online submissions for Longest Consecutive Sequence.
// Memory Usage: 41.7 MB, less than 9.08% of JavaScript online submissions for Longest Consecutive Sequence.
export default (nums) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], true);
    }
  }
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      continue;
    }
    let right = nums[i];
    let left = nums[i] - 1;
    let max = 0;
    while (map.has(right)) {
      map.delete(right);
      max++;
      right++;
    }
    while (map.has(left)) {
      map.delete(left);
      max++;
      left--;
    }
    res = Math.max(res, max);
  }

  return res;
};
