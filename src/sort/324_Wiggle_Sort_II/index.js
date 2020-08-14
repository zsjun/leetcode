/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const getPosition = (nums, p, r) => {
  const mid = Math.floor(p + (r - p) / 2);
  let temp;
  let pos;
  let tempArr = [nums[p], nums[r], nums[mid]].sort((a, b) => a - b);
  temp = tempArr[1];
  pos = temp === nums[p] ? p : temp === nums[r] ? r : mid;
  for (let i = p; i <= r; i++) {
    if (nums[i] < temp && i > pos) {
      const _temp = nums[i];
      if (i > pos) {
        for (let j = i; j > pos; j--) {
          nums[j] = nums[j - 1];
        }
      }
      nums[pos] = _temp;
      pos++;
    } else if (nums[i] > temp && i < pos) {
      nums[pos] = nums[i];
      nums[i] = temp;
      pos = i;
    }
  }
  nums[pos] = temp;

  return pos;
};
// p 起始位置， r 结束位置
// 3, 2, 3, 1, 2, 4, 5, 5, 6
const quickSort = (nums, p, r) => {
  if (p < r) {
    const q = getPosition(nums, p, r);
    quickSort(nums, p, q - 1);
    quickSort(nums, q + 1, r);
  }
};
const findKthLargest = function (nums, k) {
  quickSort(nums, 0, nums.length - 1);
  return nums[k];
};
const swap = (nums, a, b) => {
  const temp = nums[b];
  nums[b] = nums[a];
  nums[a] = temp;
};
const findVirtualIndex = (index, n) => {
  return (1 + 2 * index) % (n | 1);
};
export default (nums) => {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  // let mid = findKthLargest(nums, Math.floor((len + 1) / 2));
  const mid = nums[Math.floor((len + 1) / 2)];
  let left = 0;
  let i = 0;
  let right = len - 1;
  console.log(mid, len);
  while (i <= right) {
    if (nums[findVirtualIndex(i, len)] > mid) {
      swap(nums, findVirtualIndex(i, len), findVirtualIndex(left, len));
      left++;
      i++;
    } else if (nums[findVirtualIndex(i, len)] < mid) {
      swap(nums, findVirtualIndex(i, len), findVirtualIndex(right, len));
      right--;
    } else {
      i++;
    }
  }
  console.log(nums);
  return nums;
};
