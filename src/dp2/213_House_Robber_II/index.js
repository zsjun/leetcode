/**
 * @param {number[]} nums
 * @return {number}
 */
// Runtime: 68 ms, faster than 98.02% of JavaScript online submissions for House Robber II.
// Memory Usage: 38.5 MB, less than 53.03% of JavaScript online submissions for House Robber II.
export default (nums) => {
  if (!nums) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  let preN2money = nums[0];
  let preN1money = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length - 1; i++) {
    const temp = preN1money;
    preN1money = Math.max(preN1money, preN2money + nums[i]);
    preN2money = temp;
  }
  let preN2money2 = nums[1];
  let preN1money1 = Math.max(nums[1], nums[2]);
  for (let i = 3; i < nums.length; i++) {
    const temp = preN1money1;
    preN1money1 = Math.max(preN1money1, preN2money2 + nums[i]);
    preN2money2 = temp;
  }
  return Math.max(preN1money1, preN1money);
};
