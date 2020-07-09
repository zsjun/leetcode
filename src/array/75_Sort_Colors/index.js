/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const swap = (nums, i, j) => {
  const tmp = nums[j];
  nums[j] = nums[i];
  nums[i] = tmp;
};
export default (nums) => {
  if (nums.length === 1) return nums;
  if (nums.length === 2) {
    if (nums[0] > nums[1]) {
      swap(nums, 0, 1);
    }
  }
  let lastNoZeroIndex = 0;
  const len = nums.length;
  let lastNoTwoIndex = len - 1;
  if (nums[0] === 0) {
    lastNoZeroIndex = 1;
  }
  let max = 0;
  let min = 2;
  for (let i = 0; i < len; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  if (nums[len - 1] === 2) {
    lastNoTwoIndex = len - 2;
  }
  if (lastNoTwoIndex === len - 1) {
    for (let j = len - 2; j >= 0; j--) {
      if (nums[j] === max) {
        swap(nums, j, len - 1);
        lastNoTwoIndex = len - 2;
        break;
      }
    }
  }
  if (lastNoZeroIndex === 0) {
    for (let i = 1; i < len; i++) {
      if (nums[i] === min) {
        swap(nums, i, lastNoZeroIndex);
        lastNoZeroIndex = 1;
        break;
      }
    }
  }

  for (let i = 1; i < len; i++) {
    if ((nums[i] === nums[i - 1]) === min && nums[0] === min) {
      lastNoZeroIndex = i + 1;
    }
  }
  for (let j = len - 1; j >= 2; j--) {
    if ((nums[j - 1] === nums[j]) === max && nums[len - 1] === max) {
      lastNoTwoIndex = j - 2;
    }
  }

  let i = lastNoZeroIndex;
  while (i <= lastNoTwoIndex) {
    if (nums[i] === 0) {
      swap(nums, i, lastNoZeroIndex);
      lastNoZeroIndex++;
      if (nums[i] === 1 || nums[i] === 2) {
        continue;
      } else {
        i++;
      }
    } else if (nums[i] === 1) {
      i++;
    } else if (nums[i] === 2) {
      if (nums[lastNoTwoIndex] !== 2) {
        swap(nums, i, lastNoTwoIndex);
        lastNoTwoIndex--;
        if (nums[i] === 0 || nums[i] === 1) {
          continue;
        } else {
          i++;
        }
      } else {
        lastNoTwoIndex--;
        continue;
      }
    }
  }
  return nums;
};
