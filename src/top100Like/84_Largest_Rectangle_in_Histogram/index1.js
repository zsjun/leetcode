/**
 * @param {number[]} heights
 * @return {number}
 */
// Runtime: 104 ms, faster than 78.34% of JavaScript online submissions for Largest Rectangle in Histogram.
// Memory Usage: 49.1 MB, less than 45.99% of JavaScript online submissions for Largest Rectangle in Histogram.
export default (heights) => {
  if (!heights || heights.length === 0) return 0;
  if (heights.length === 1) return heights[0];

  let max = 0;
  const len = heights.length;
  // 最左侧位置的下一位
  const leftFromI = new Array(len);
  leftFromI[0] = -1;
  // 最右侧位置的下一位
  const rightFromI = new Array(len);
  rightFromI[len - 1] = len;
  for (let i = 1; i < heights.length; i++) {
    if (heights[i] === 0) {
      continue;
    }
    let p = i - 1;
    while (p >= 0 && heights[p] >= heights[i]) {
      p = leftFromI[p];
    }
    leftFromI[i] = p;
  }
  for (let i = heights.length - 2; i >= 0; i--) {
    if (heights[i] === 0) {
      continue;
    }
    let p = i + 1;
    while (p < heights.length && heights[p] >= heights[i]) {
      p = rightFromI[p];
    }
    rightFromI[i] = p;
  }
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== 0) {
      max = Math.max((rightFromI[i] - leftFromI[i] - 1) * heights[i], max);
    }
  }

  return max;
};
