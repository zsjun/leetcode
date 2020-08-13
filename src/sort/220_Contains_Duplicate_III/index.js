/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
export default (nums, k, t) => {
  if (!nums) return false;
  for (let i = 0; i < nums.length; i++) {
    let max = k;
    while (max > 0) {
      if (i + max < nums.length && Math.abs(nums[i] - nums[i + max]) <= t) {
        console.log(i, max);
        return true;
      }
      max--;
    }
  }
  return false;
};
