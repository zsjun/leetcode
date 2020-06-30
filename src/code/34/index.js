export default (nums, target) => {
  let end = nums.length - 1;
  let begin = 0;
  let mid = Math.floor((begin + end) / 2);

  while (begin <= end) {
    if (nums[mid] < target) {
      begin = mid + 1;
      mid = Math.floor((begin + end) / 2);
    }
    if (nums[mid] > target) {
      end = mid - 1;
      mid = Math.floor((begin + end) / 2);
    }
    if (nums[mid] === target) {
      for (; begin < mid; begin++) {
        if (nums[begin] === target) {
          return [begin, mid];
        }
      }
    }
  }
  return [-1, -1];
};
