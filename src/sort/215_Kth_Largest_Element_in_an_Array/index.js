/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
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
export default (nums, k) => {
  // nums.sort((a, b) => a - b);
  quickSort(nums, 0, nums.length - 1);
  console.log(nums);
  return nums[nums.length - k];
};
