const findMaxJump = (nums, begin) => {
  let min = begin;
  for (let j = begin - 1; j >= 0; j--) {
    if (nums[j] >= begin - j) {
      if (j < min) min = j;
    }
  }
  return min;
};
export default (nums) => {
  if (nums.length === 1) return 0;
  if (nums.length === 2) return 1;
  let i = 1;
  let res = findMaxJump(nums, nums.length - 1);
  while (res !== 0) {
    res = findMaxJump(nums, res);
    i++;
    console.log("11", res);
  }
  return i;
};
