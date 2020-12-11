/**
 * @param {number[]} nums
 * @return {number}
 */
// Runtime: 68 ms, faster than 97.89% of JavaScript online submissions for House Robber.
// Memory Usage: 38.2 MB, less than 91.14% of JavaScript online submissions for House Robber.
export default (nums) => {
  if (!nums) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  let preN2money = nums[0];
  let preN1money = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    const temp = preN1money;
    preN1money = Math.max(preN1money, preN2money + nums[i]);
    preN2money = temp;
  }
  return preN1money;
};
