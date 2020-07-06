/**
 * @param {number[]} heights
 * @return {number}
 */
export default (heights) => {
  // 优先处理特殊情况
  if (!heights) return 0;
  if (heights.length === 1) return heights[0];
  // heights 中每个元素左边大于height[i]的最小坐标
  const leftLow = [-1];
  const rightHigh = [];
  // 最大面积
  let maxArea = 0;
  for (let i = 1; i < heights.length; i++) {
    let left = i - 1;

    while (left >= 0 && heights[left] >= heights[i]) {
      left = leftLow[left];
      // 到了最左边
      if (left === -1) {
        break;
      }
    }
    leftLow[i] = left;
  }
  for (let j = 0; j < heights.length; j++) {
    let right = j + 1;
    while (right >= 1 && heights[right] >= heights[j]) {
      right += 1;
    }
    rightHigh[j] = right;
  }
  for (let k = 0; k < heights.length; k++) {
    maxArea = Math.max(maxArea, heights[k] * (rightHigh[k] - leftLow[k] - 1));
  }
  return maxArea;
};
