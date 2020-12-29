/**
 * @param {number[]} nums
 * @return {number}
 */
// Runtime: 68 ms, faster than 99.88% of JavaScript online submissions for Majority Element.
// Memory Usage: 40.8 MB, less than 74.90% of JavaScript online submissions for Majority Element.
export default (nums) => {
  if (nums.length === 1) return nums[0];
  let major = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      count++;
      major = nums[i];
    } else if (major === nums[i]) {
      count++;
    } else {
      count--;
    }
  }
  return major;
};
