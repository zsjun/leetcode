const swap = (a, b) => {
  return ([a, b] = [b, a]);
};
export default (nums) => {
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    // 把nums[i] put his nums[i] - 1 position
    if (nums[i] >= 1 && nums[i] < len && nums[i] !== nums[nums[i] - 1]) {
      swap(nums[i], nums[nums[i] - 1]);
    }
    // 然后再遍历一遍，找出数组中的值不等于i+1的数
    for (let j = 0; j < len; j++) {
      if (nums[j] !== j + 1) {
        return j + 1;
      }
    }
  }
  return n + 1;
};
