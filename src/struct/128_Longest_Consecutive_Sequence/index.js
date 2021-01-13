/**
 * @param {number[]} nums
 * @return {number}
 */
// Runtime: 148 ms, faster than 17.10% of JavaScript online submissions for Longest Consecutive Sequence.
// Memory Usage: 40.1 MB, less than 90.23% of JavaScript online submissions for Longest Consecutive Sequence.
export default (nums) => {
  nums.sort((a, b) => a - b);
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    let count = 1;
    for (let j = i; j < nums.length - 1; j++) {
      if (nums[j + 1] === nums[j] + 1) {
        count++;
      } else if (nums[j + 1] === nums[j]) {
        continue;
      } else {
        break;
      }
    }
    res = Math.max(res, count);
  }
  return res;
};
