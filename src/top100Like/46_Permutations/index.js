/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Output: [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]];
const backtrack = (res, tempRes, tempIndexRes, nums) => {
  if (tempRes.length === nums.length) {
    res.push([...tempRes]);
  }

  for (let i = 0; i < nums.length; i++) {
    // 关键是找好条件，跳出循环
    // if (i > start && nums[i] === nums[i - 1]) continue;
    if (!tempIndexRes.includes(i)) {
      tempRes.push(nums[i]);
      tempIndexRes.push(i);
      backtrack(res, tempRes, tempIndexRes, nums);
      tempIndexRes.pop();
      tempRes.pop();
    }
  }
};
// Runtime: 100 ms, faster than 44.34% of JavaScript online submissions for Permutations.
// Memory Usage: 40.7 MB, less than 98.98% of JavaScript online submissions for Permutations.
export default (nums) => {
  const res = [];
  // nums.sort();
  backtrack(res, [], [], nums);
  return res;
};
