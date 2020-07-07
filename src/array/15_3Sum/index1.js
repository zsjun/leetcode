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
// 时间复杂度还是太长，导致Time Limit Exceeded
export default (nums) => {
  if (nums.length < 2) return [];
  nums.sort((a, b) => a - b);

  const len = nums.length;
  const res = [];
  const next = [];
  for (let i = 0; i < len; i++) {
    const index = findPosition(nums, i, len);
    next[i] = index;
  }
  for (let i = 0; i < len - 2; i = next[i]) {
    for (let j = i + 1; j < len - 1; j = next[j]) {
      for (let k = j + 1; k < len; k = next[k]) {
        if (nums[k] + nums[j] + nums[i] === 0) {
          res.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  return res;
};
