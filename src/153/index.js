export default (nums = []) => {
  if (nums.length === 1) return nums[0];
  let begin = 0;
  let end = nums.length - 1;
  let min = nums[begin];
  while (begin < end) {
    if (nums[begin] > nums[end]) {
      begin++;
      if (nums[end] < min) {
        min = nums[end];
      }
    }
    if (nums[begin] < nums[end]) {
      end--;
      if (nums[begin] < min) {
        min = nums[begin];
      }
    }
  }
  return min;
};
