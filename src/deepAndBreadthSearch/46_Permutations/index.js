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
  res.push([...nums]);
  for (let i = index + 1; i < nums.length; i++) {
    swap(nums, index, i);
    backtracking([...nums], index + 1, res);
    swap(nums, i, index);
  }
};
export default (nums) => {
  if (nums.length === 1) {
    return [[nums[0]]];
  }
  let res = [];
  backtracking(nums, 0, res);
  console.log(res);
  return res;
};
