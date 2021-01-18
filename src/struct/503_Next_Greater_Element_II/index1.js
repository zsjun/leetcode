/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Runtime: 144 ms, faster than 44.16% of JavaScript online submissions for Next Greater Element II.
// Memory Usage: 44.4 MB, less than 76.65% of JavaScript online submissions for Next Greater Element II.
export default (nums) => {
  const len = nums.length;
  const res = new Array(len).fill(-1);
  const stack = [];
  for (let i = 0; i < 2 * len; i++) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i % len]) {
      const index = stack.pop();
      res[index] = nums[i % len];
    }
    stack.push(i % len);
  }
  return res;
};
