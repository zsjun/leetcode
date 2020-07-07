/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export default (nums) => {
  const res = [];
  if (nums.length < 3) {
    return res;
  }
  nums.sort((a, b) => a - b);

  const len = nums.length;

  for (let i = 0; i < len; i++) {
    // 如果相等到最后一个位置
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    const target = -nums[i];
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      if (nums[left] + nums[right] === target) {
        res.push([nums[left], -target, nums[right]]);
        while (nums[left] === nums[left + 1]) {
          left++;
        }
        left++;
        while (nums[right] === nums[right - 1]) {
          right--;
        }
        right--;
      } else if (nums[left] + nums[right] > target) {
        right--;
      } else {
        left++;
      }
    }
  }
  return res;
};
