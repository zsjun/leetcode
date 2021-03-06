/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const swap = (nums, i, j) => {
  const temp = nums[j];
  nums[j] = nums[i];
  nums[i] = temp;
};
const backTracking = (nums, level, res) => {
  if (level === nums.length - 1) {
    for (let k = 0; k < res.length; k++) {
      if (res[k].join("") === nums.join("")) {
        return;
      }
    }
    res.push(nums);
    return;
  }
  for (let i = level; i < nums.length; i++) {
    if (nums[level] === nums[i] && i !== level) {
      continue;
    }
    if (level !== i) {
      swap(nums, i, level);
    }
    backTracking([...nums], level + 1, res);
    if (i !== level) {
      swap(nums, level, i);
    }
  }
};
// Runtime: 4384 ms, faster than 5.01% of JavaScript online submissions for Permutations II.
// Memory Usage: 45.7 MB, less than 21.99% of JavaScript online submissions for Permutations II.
export default (nums) => {
  if (nums.length === 1) return [nums];
  const res = [];
  nums.sort((a, b) => a - b);
  backTracking(nums, 0, res);
  return res;
};
