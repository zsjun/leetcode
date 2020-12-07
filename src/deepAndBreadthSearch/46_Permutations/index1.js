const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};
// count 遍历的次数
const backtracking = (nums, count, res) => {
  if (count === nums.length - 1) {
    res.push(nums);
  }

  for (let i = count; i < nums.length; i++) {
    // 修改状态
    if (i !== count) {
      swap(nums, i, count);
    }
    backtracking([...nums], count + 1, res);
    // 恢复状态
    if (i !== count) {
      swap(nums, count, i);
    }
  }
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export default (nums) => {
  if (nums.length === 1) {
    return [[nums[0]]];
  }
  let res = [];
  backtracking(nums, 0, res);
  return res;
};
