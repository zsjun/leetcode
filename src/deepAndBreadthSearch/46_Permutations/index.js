/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};
const backtracking = (nums, index, res) => {
  if (index === nums.length - 1) {
    res.push([...nums]);
  }
  for (let i = index; i < nums.length; i++) {
    if (i !== index) {
      swap(nums, i, index);
    }

    backtracking([...nums], index + 1, res);
    if (i !== index) {
      swap(nums, index, i);
    }
  }
};
// Runtime: 92 ms, faster than 85.19% of JavaScript online submissions for Permutations.
// Memory Usage: 41.3 MB, less than 79.69% of JavaScript online submissions for Permutations.
export default (nums) => {
  if (nums.length === 1) {
    return [[nums[0]]];
  }
  let res = [];
  backtracking(nums, 0, res);
  console.log(11, res);
  return res;
};
