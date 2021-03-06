/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const findPosition = (nums, i, max) => {
  if (nums[i] === nums[i + 1] && i + 1 < max) {
    while (nums[i] === nums[i + 1] && i + 1 < max) {
      i++;
    }
    i++;
  } else {
    i++;
  }
  return i;
};
export default (nums) => {
  if (nums.length < 2) return [];
  nums.sort((a, b) => a - b);

  const len = nums.length;
  const res = [];
  for (let i = 0; i < len - 2; i = findPosition(nums, i, len - 2)) {
    for (let j = i + 1; j < len - 1; j = findPosition(nums, j, len - 1)) {
      for (let k = j + 1; k < len; k = findPosition(nums, k, len)) {
        if (nums[k] + nums[j] + nums[i] === 0) {
          res.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  return res;
};
