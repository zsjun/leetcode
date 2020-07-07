// 上一次利用每一层，现在利用每一个空格来计算
// 423
export default (height) => {
  let left = 0;
  let right = height.length - 1;
  // 雨水总量
  let trap = 0;

  // 左边最大值
  let maxLeft = 0;
  // 右边最大值
  let maxRight = 0;

  // cal from left and right to mid
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
