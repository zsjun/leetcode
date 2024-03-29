/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  if (height.length < 2) return 0;
  let left = 0;
  let right = height.length - 1;
  let res = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      res = Math.max(res, (right - left) * height[left]);
      left++;
    } else {
      res = Math.max(res, (right - left) * height[right]);
      right--;
    }
  }
  return res;
};
