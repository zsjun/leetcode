/**
 * @param {number[]} nums
 * @return {number}
 */
//  Runtime: 204 ms, faster than 7.51% of JavaScript online submissions for Maximum Subarray.
//  Memory Usage: 39.2 MB, less than 47.38% of JavaScript online submissions for Maximum Subarray.
export default (nums) => {
  if (nums.length === 1) return nums[0];
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i]);
    let j = i + 1;
    let res = nums[i];

    while (j < nums.length) {
      res += nums[j];
      ++j;

      max = Math.max(max, res);
    }
  }
  return max;
};
