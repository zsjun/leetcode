/**
 * @param {number[]} nums
 * @return {number}
 */
[3, 0, 1];
(2)[(0, 1)];
(2)[(9, 6, 4, 2, 3, 5, 7, 0, 1)];
8;
// Runtime: 88 ms, faster than 65.50% of JavaScript online submissions for Missing Number.
// Memory Usage: 41.2 MB, less than 47.38% of JavaScript online submissions for Missing Number.
export default (nums) => {
  const len = nums.length;
  let sum = 0;
  for (let i = 1; i <= len; i++) {
    sum += i;
  }
  for (let i = 0; i < nums.length; i++) {
    sum ^= nums[i];
  }
  return sum;
};
