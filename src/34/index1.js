export default (nums, target) => {
  let end = nums.length - 1;
  let begin = 0;

  while (begin < end) {
    const mid = Math.floor(begin + (end - begin) / 2);
    if (nums[beigin] !== target) begin++;
    if (nums[end] !== target) end--;
    if (nums[low] === nums[high]) break;
  }
  return nums[low] === target ? [low, high] : [-1, -1];
};
