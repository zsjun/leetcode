/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
export default (nums) => {
  let len = nums.length;
  if (len === 1) return nums;
  let j = len - 1;
  let i = len - 2;
  let k = len - 1;
  let last = len - 1;

  function swap(i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  // 寻找第一个升序对的位置，找到以后，i 以后的数组就是降序的，否组i的位置必然不在目前的位置
  while (i >= 0 && nums[i] >= nums[j]) {
    j--;
    i--;
  }
  if (i === -1) {
    nums.sort((a, b) => a - b);
    return nums;
  }
  // 从后到j寻找第一个比nums[i]大的数
  while (k >= j && nums[k] <= nums[i]) {
    k--;
  }
  swap(i, k);
  // 交换j 到len 的数据变成升序
  while (j <= last) {
    swap(j, last);
    j++;
    last--;
  }
  return nums;
};
