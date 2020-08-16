const swap = (nums, i, j) => {
  const temp = nums[j];
  nums[j] = nums[i];
  nums[i] = temp;
};

export default (nums) => {
  if (!nums || nums.length === 0) return;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i; j++) {
      if (nums[j] < nums[j + 1]) {
        swap(nums, j, j + 1);
      }
    }
  }
};
