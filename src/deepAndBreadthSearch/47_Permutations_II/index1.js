/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const backTracking = (nums, used, list, res) => {
  if (list.length === nums.length) {
    res.push([...list]);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (used[i]) {
      continue;
    }
    // 去除掉重复，防止重复
    if (i > 0 && nums[i - 1] === nums[i] && !used[i - 1]) {
      continue;
    }
    used[i] = 1;
    list.push(nums[i]);
    backTracking(nums, used, list, res);
    used[i] = 0;
    list.pop();
  }
};
// Runtime: 84 ms, faster than 99.23% of JavaScript online submissions for Permutations II.
// Memory Usage: 40.9 MB, less than 94.99% of JavaScript online submissions for
export default (nums) => {
  if (!nums || nums.length === 0) return [];
  if (nums.length === 1) return [nums];
  const res = [];
  // 是否被使用过
  const used = new Array(nums.length).fill(0);
  nums.sort((a, b) => a - b);
  backTracking(nums, used, [], res);
  return res;
};
