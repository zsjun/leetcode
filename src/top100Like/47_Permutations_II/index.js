/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Output: [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]];
// 排列组合的情况下，适合使用回溯法
const backtrack = (res, tempRes, nums, used) => {
  if (tempRes.length === nums.length) {
    res.push([...tempRes]);
  }

  for (let i = 0; i < nums.length; i++) {
    if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) continue;
    used[i] = true;
    tempRes.push(nums[i]);
    backtrack(res, tempRes, nums, used);
    used[i] = false;
    tempRes.pop();
  }
};
// Runtime: 104 ms, faster than 56.21% of JavaScript online submissions for Permutations II.
// Memory Usage: 41.9 MB, less than 76.26% of JavaScript online submissions for Permutations II.
export default (nums) => {
  const res = [];
  nums.sort();
  backtrack(res, [], nums, []);
  return res;
};
