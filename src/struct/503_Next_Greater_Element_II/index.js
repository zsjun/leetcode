/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 1, 2, 1;
// 2, -1, 2;
// Runtime: 228 ms, faster than 17.77% of JavaScript online submissions for Next Greater Element II.
// Memory Usage: 45 MB, less than 57.87% of JavaScript online submissions for Next Greater Element II.
export default (nums) => {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    while (j !== i) {
      if (nums[j] <= nums[i] || j > nums.length - 1) {
        if (j > nums.length - 1) {
          j = 0;
        } else {
          j++;
        }
      } else {
        break;
      }
    }
    // console.log(j);
    if (j === i) {
      res.push(-1);
    } else {
      res.push(nums[j]);
    }
  }
  return res;
};
