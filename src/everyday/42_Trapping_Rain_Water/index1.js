// Runtime: 164 ms, faster than 13.14% of JavaScript online submissions for Trapping Rain Water.
// Memory Usage: 40.9 MB, less than 53.74% of JavaScript online submissions for Trapping Rain Water.
var trap = function (height) {
  let trap = 0;
  let maxLeft = 0;
  let maxRight = 0;

  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    if (height[left] <= height[right]) {
      if (height[left] > maxLeft) {
        maxLeft = height[left];
      } else {
        trap += maxLeft - height[left];
      }
      left++;
    }
    if (height[right] < height[left]) {
      if (height[right] > maxRight) {
        maxRight = height[right];
      } else {
        trap += maxRight - height[right];
      }
      right--;
    }
  }
  return trap;
};
