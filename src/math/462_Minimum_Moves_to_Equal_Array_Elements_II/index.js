/**
 * @param {number[]} nums
 * @return {number}
 */
// Runtime: 84 ms, faster than 82.35% of JavaScript online submissions for Minimum Moves to Equal Array Elements II.
// Memory Usage: 40.6 MB, less than 64.71% of JavaScript online submissions for Minimum Moves to Equal Array Elements II.
export default (nums) => {
  if (nums.length === 1) return 0;
  nums.sort((a, b) => a - b);
  const len = nums.length;
  const mid = Math.floor(len / 2);
  const midNum = nums[mid];
  let res = 0;
  for (let i = 0; i < len; i++) {
    res += Math.abs(nums[i] - midNum);
  }
  return res;
};
