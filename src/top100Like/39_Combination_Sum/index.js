/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const backtrack = (list, tempList, nums, remain, start) => {
  if (remain < 0) return;
  if (remain === 0) {
    list.push([...tempList]);
  } else {
    for (let i = start; i < nums.length; i++) {
      tempList.push(nums[i]);
      backtrack(list, tempList, nums, remain - nums[i], i);
      tempList.pop();
    }
  }
};
// Runtime: 100 ms, faster than 50.16% of JavaScript online submissions for Combination Sum.
// Memory Usage: 40.8 MB, less than 77.62% of JavaScript online submissions for Combination Sum.
export default (candidates, target) => {
  const list = [];
  candidates.sort();
  backtrack(list, [], candidates, target, 0);
  return list;
};
