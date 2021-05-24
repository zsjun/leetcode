/**
 * @param {number[]} heights
 * @return {number}
 */
// 超时
export default (heights) => {
  if (!heights || heights.length === 0) return 0;
  if (heights.length === 1) return heights[0];
  let max = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] === 0) {
      continue;
    }
    let low = i;
    let high = i;
    let len = 1;
    while (low >= 1 && heights[low - 1] >= heights[i]) {
      ++len;
      --low;
    }
    while (high < heights.length - 1 && heights[high + 1] >= heights[i]) {
      ++len;
      ++high;
    }
    max = Math.max(max, len * heights[i]);
  }
  return max;
};
