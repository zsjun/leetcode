/**
 * @param {number[]} nums
 * @return {number[]}
 */
const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};
// Runtime: 200 ms, faster than 34.72% of JavaScript online submissions for Find All Numbers Disappeared in an Array.
// Memory Usage: 47 MB, less than 59.96% of JavaScript online submissions for Find All Numbers Disappeared in an Array.
export default (nums) => {
  let index = 0;
  while (index < nums.length) {
    let currentIndex = index;
    let targetIndex = nums[index] - 1;

    if (nums[index] !== index + 1 && nums[targetIndex] !== nums[index]) {
      swap(nums, index, targetIndex);
      // 相等的情况下，此时不应该设置为 -1
    } else if (nums[index] === index + 1) {
      ++index;
    } else {
      nums[index] = -1;
      ++index;
    }
  }
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === -1) {
      res.push(i + 1);
    }
  }
  return res;
};
