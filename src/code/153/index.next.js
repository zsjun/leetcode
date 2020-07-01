// 改进版
export default (nums = []) => {
  let begin = 0;
  let end = nums.length - 1;
  while (begin < end) {
    // 因为是数组是升序
    if (nums[begin] < nums[end]) {
      return nums[begin];
    }
    //加快查找速度，从mid开始
    let mid = Math.floor((begin + end) / 2);

    if (nums[mid] >= nums[begin]) {
      begin = mid + 1;
    } else {
      end = mid;
    }
  }
  return nums[begin];
};
