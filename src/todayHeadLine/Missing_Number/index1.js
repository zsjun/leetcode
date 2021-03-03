/**
 * @param {number[]} nums
 * @return {number}
 */
export default (nums) => {
  const len = nums.length;
  let sum = 0;
  for (let i = 0; i <= len; i++) {
    sum += i;
  }
  for (let i = 0; i < len; i++) {
    sum -= nums[i];
  }
  return sum;
};
