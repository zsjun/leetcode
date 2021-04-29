/**
 * @param {number[]} height
 * @return {number}
 */

export default (height) => {
  let max = 0;
  let low = 0;
  let high = height.length - 1;
  while (low < high) {
    const width = high - low;
    let res = 0;
    if (height[low] <= height[high]) {
      res = height[low] * width;
      max = Math.max(res, max);
      ++low;
    } else {
      res = height[high] * width;
      max = Math.max(res, max);
      --high;
    }
  }
  return max;
};
