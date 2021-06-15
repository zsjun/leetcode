/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// Runtime: 96 ms, faster than 55.61% of JavaScript online submissions for Combination Sum II.
// Memory Usage: 39.8 MB, less than 92.81% of JavaScript online submissions for Combination Sum II.
const backtrack = (res, tempRes, nums, remain, start) => {
  if (remain === 0) {
    res.push([...tempRes]);
  }
  if (remain < 0) {
    return;
  }
  for (let i = start; i < nums.length; i++) {
    if (i > start && nums[i] === nums[i - 1]) continue;
    tempRes.push(nums[i]);
    backtrack(res, tempRes, nums, remain - nums[i], i + 1);
    tempRes.pop();
  }
};

export default (candidates, target) => {
  const res = [];
  candidates.sort((a, b) => a - b);
  // console.log(candidates)
  backtrack(res, [], candidates, target, 0);
  return res;
};
