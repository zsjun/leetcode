/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
// Runtime: 112 ms, faster than 33.95% of JavaScript online submissions for Reshape the Matrix.
// Memory Usage: 43.7 MB, less than 83.95% of JavaScript online submissions for Reshape the Matrix.
export default (nums, r, c) => {
  const m = nums.length;
  const n = nums[0] ? nums[0].length : 0;
  if (r * c !== m * n) {
    return nums;
  }
  const res = [];
  for (let i = 0; i < r; i++) {
    res[i] = new Array(c).fill(0);
  }
  let begin = 0;
  let end = 0;
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (end < n) {
        res[i][j] = nums[begin][end];
        end++;
      } else {
        begin++;
        end = 0;
        res[i][j] = nums[begin][end];
        end++;
      }
    }
  }
  return res;
};
