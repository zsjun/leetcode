/**
 * @param {number[]} nums
 * @return {number}
 */
export default (nums) => {
  return nums.reduce((a, b) => a ^ b);
};
