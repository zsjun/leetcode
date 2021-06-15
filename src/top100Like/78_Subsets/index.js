/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const backtrack = (res, tempRes, nums, start) => {
  res.push([...tempRes]);
  for (let i = start; i < nums.length; i++) {
    tempRes.push(nums[i]);
    backtrack(res, tempRes, nums, i + 1);
    tempRes.pop();
  }
};
// Runtime: 84 ms, faster than 63.32% of JavaScript online submissions for Subsets.
// Memory Usage: 39.5 MB, less than 70.76% of JavaScript online submissions for Subsets.
export default (nums) => {
  const res = [];
  backtrack(res, [], nums, 0);
  return res;
};
