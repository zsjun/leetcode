/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Runtime: 692 ms, faster than 13.05% of JavaScript online submissions for Product of Array Except Self.
// Memory Usage: 51.3 MB, less than 8.63% of JavaScript online submissions for Product of Array Except Self.
export default (nums) => {
  const preNums = [1];
  const afterNums = [1];
  for (let i = 1; i < nums.length; i++) {
    preNums[i] = preNums[i - 1] * nums[i - 1];
  }
  for (let j = nums.length - 2, k = 1; j >= 0; j--, k++) {
    const temp = afterNums[afterNums.length - k] * nums[j + 1];
    afterNums.unshift(temp);
  }
  // console.log(preNums, afterNums);
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    res[i] = preNums[i] * afterNums[i];
  }
  return res;
};
