/**
 * @param {number[]} nums
 * @return {number}
 */
// 当有多个状态的时候，可以分别放置存储状态的数组
export default (nums) => {
  if (nums.length <= 1) return nums.length;
  const len = nums.length;
  const up = new Array(len).fill(0);
  const down = new Array(len).fill(0);
  up[0] = 1;
  down[0] = 1;
  for (let i = 1; i < len; i++) {
    if (nums[i] > nums[i - 1]) {
      up[i] = down[i - 1] + 1;
      down[i] = down[i - 1];
    } else if (nums[i] < nums[i - 1]) {
      down[i] = up[i - 1] + 1;
      up[i] = up[i - 1];
    } else {
      down[i] = down[i - 1];
      up[i] = up[i - 1];
    }
  }

  return Math.max(down[nums.length - 1], up[nums.length - 1]);
};
