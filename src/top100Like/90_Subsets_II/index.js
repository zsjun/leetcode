/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Input: nums = [1, 2, 2];
// Output: [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]];
const backtrack = (res, tempRes, nums, start) => {
  res.push([...tempRes]);
  for (let i = start; i < nums.length; i++) {
    // 关键是找好条件，跳出循环
    if (i > start && nums[i] === nums[i - 1]) continue;
    tempRes.push(nums[i]);
    backtrack(res, tempRes, nums, i + 1);
    tempRes.pop();
  }
};
// Runtime: 76 ms, faster than 98.18% of JavaScript online submissions for Subsets II.
// Memory Usage: 40.4 MB, less than 89.55% of JavaScript online submissions for Subsets II.
export default (nums) => {
  const res = [];
  nums.sort();
  backtrack(res, [], nums, 0);
  return res;
};
