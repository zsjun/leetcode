/**
 * @param {number[]} height
 * @return {number}
 */
// Runtime: 112 ms, faster than 43.52% of JavaScript online submissions for Container With Most Water.
// Memory Usage: 40.1 MB, less than 98.20% of JavaScript online submissions for Container With Most Water.
export default (height) => {
  let low = 0;
  let high = height.length - 1;

  let max = 0;
  while (low < high) {
    if (height[low] <= height[high]) {
      max = Math.max(height[low] * (high - low), max);
      ++low;
    } else {
      max = Math.max(height[high] * (high - low), max);
      --high;
    }
  }
  return max;
};
