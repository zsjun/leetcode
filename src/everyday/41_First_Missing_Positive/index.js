const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};
var firstMissingPositive = function (nums) {
  const len = nums.length;
  let i = 0;
  while (i < len) {
    // nums[0]大于0
    // 并且是小于len
    // 并且nums[i] !== i+1
    // 取消无意义的交换，比如[1,1]这种情况
    // nums[nums[i]-1] !== nums[i]
    if (
      nums[i] > 0 &&
      nums[i] <= len &&
      i !== nums[i] - 1 &&
      nums[nums[i] - 1] !== nums[i]
    ) {
      swap(nums, nums[i] - 1, i);
    } else {
      ++i;
    }
  }
  for (let i = 0; i < len; ++i) {
    if (nums[i] !== i + 1) return i + 1;
  }
  return len + 1;
};
