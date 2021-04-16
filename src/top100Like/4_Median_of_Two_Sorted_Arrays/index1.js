/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
//  Runtime: 128 ms, faster than 89.09% of JavaScript online submissions for Median of Two Sorted Arrays.
//  Memory Usage: 43.1 MB, less than 99.10% of JavaScript online submissions for Median of Two Sorted Arrays.
// nums1 = [2], nums2=[1,3]
const findMedianSortedArrays = (nums1, nums2) => {
  const m = nums1.length;
  const n = nums2.length;
  if (m > n) return findMedianSortedArrays(nums2, nums1);
  // nums1.length 小于nums2.length
  let nums1MinIndex = 0,
    nums1MaxIndex = m,
    nums1Mid,
    nums2Num,
    num1,
    // 类似于Math.floor(n/2)
    mid = (m + n + 1) >> 1,
    num2;
  // 遍历nums1，从0到num1.length，也就是left nums1包含0个数字到包含nums1.length个数字
  while (nums1MinIndex <= nums1MaxIndex) {
    // 先从nums1的取中间的数字
    nums1Mid = (nums1MinIndex + nums1MaxIndex) >> 1;
    // nums2取mid剩下的数字个数
    nums2Num = mid - nums1Mid;
    // 如果num1Mid小于nums1.length 并且nums2有个数，并且
    if (nums1Mid < m && nums2Num > 0 && nums2[nums2Num - 1] > nums1[nums1Mid]) {
      nums1MinIndex = nums1Mid + 1;
    } else if (nums1Mid > 0 && nums2Num < n && nums2[nums2Num] < nums1[nums1Mid - 1]) {
      nums1MaxIndex = nums1Mid - 1;
      // nums2[nums2Num - 1] <= nums1[nums1Mid] && nums2[nums2Num] >= nums1[nums1Mid - 1] 则跳出循环
    } else {
      if (nums1Mid === 0) num1 = nums2[nums2Num - 1];
      else if (nums2Num === 0) num1 = nums1[nums1Mid - 1];
      else num1 = Math.max(nums1[nums1Mid - 1], nums2[nums2Num - 1]);
      break;
    }
  }
  // 如果m+n等于奇数，直接返回num1
  if ((m + n) & 1) return num1;
  // 如果num1Mid全部选完了
  if (nums1Mid === m) {
    num2 = nums2[nums2Num];
  } else if (nums2Num === n) {
    num2 = nums1[nums1Mid];
  } else {
    num2 = Math.min(nums1[nums1Mid], nums2[nums2Num]);
  }
  return (num1 + num2) / 2;
};

export default findMedianSortedArrays;
