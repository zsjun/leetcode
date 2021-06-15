/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const backtrack = (res, tempRes, nums) => {
  if (tempRes.length === nums.length) {
    res.push([...tempRes]);
  }

  for (let i = 0; i < nums.length; i++) {
    // 这里没有好好理解题意，nums中所有的数字都是不相同的
    if (!tempRes.includes(nums[i])) {
      tempRes.push(nums[i]);
      backtrack(res, tempRes, tempIndexRes, nums);
      tempRes.pop();
    }
  }
};
// Runtime: 92 ms, faster than 83.28% of JavaScript online submissions for Permutations.
// Memory Usage: 41.4 MB, less than 67.82% of JavaScript online submissions for Permutations.
export default (nums) => {
  const res = [];
  // nums.sort();
  backtrack(res, [], nums);
  return res;
};
