/**
 * @param {number[]} height
 * @return {number}
 */
//  Runtime: 92 ms, faster than 67.86% of JavaScript online submissions for Container With Most Water.
//  Memory Usage: 48.2 MB, less than 14.79% of JavaScript online submissions for Container With Most Water.
export default (height) => {
  if (!height || height.length === 0) return 0;
  let max = 0;
  let low = 0;
  let high = height.length - 1;
  while (low < high) {
    if (height[high] <= height[low]) {
      max = Math.max(height[high] * (height - low + 1), max);
      high--;
    } else {
      max = Math.max(height[low] * (height - low + 1), max);
      low++;
    }
  }
  return max;
};
