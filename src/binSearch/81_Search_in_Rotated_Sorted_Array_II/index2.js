/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
export default (nums, target) => {
  if (nums.length === 0 || !nums) {
    return false;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return true;
    }
  }

  return false;
};
