/**
 * @param {number[]} nums
 * @return {boolean}
 */
export default (nums) => {
  if (!nums || nums.length < 3) return false;
  let min = Number.MAX_VALUE;
  let big = Number.MAX_VALUE;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= min) {
      min = nums[i];
    } else if (nums[i] <= big) {
      big = nums[i];
    } else {
      return true;
    }
  }
  return false;
};
