const swap = (nums, a, b) => {
  const temp = nums[b];
  nums[b] = nums[a];
  nums[a] = temp;
};
export default (nums) => {
  const len = nums.length;
  // 处理边界，算法优先处理边界情况
  if (len === 0) return 1;
  if (len === 1) {
    if (nums[0] <= 0 || nums[0] > 1) return 1;
    if (nums[0] === 1) return 2;
  }
  for (let i = 0; i < len; i++) {
    // 把nums[i] put his nums[i] - 1 position
    while (nums[i] >= 1 && nums[i] <= len && nums[i] !== nums[nums[i] - 1]) {
      swap(nums, i, nums[i] - 1);
    }
    // 然后再遍历一遍，找出数组中的值不等于i+1的数
  }
  for (let j = 0; j < len; j++) {
    if (nums[j] !== j + 1) {
      return j + 1;
    }
  }
  return len + 1;
};
