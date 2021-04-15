/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// Runtime: 140 ms, faster than 54.47% of JavaScript online submissions for Median of Two Sorted Arrays.
// Memory Usage: 46 MB, less than 21.67% of JavaScript online submissions for Median of Two Sorted Arrays.
export default (nums1, nums2) => {
  const arr = [];
  for (let i = 0; i < nums1.length; i++) {
    arr.push(nums1[i]);
  }
  for (let i = 0; i < nums2.length; i++) {
    arr.push(nums2[i]);
  }
  arr.sort((a, b) => a - b);
  const len = arr.length;
  if (len % 2 === 0) {
    return (arr[len / 2 - 1] + arr[len / 2]) / 2;
  } else {
    return arr[(len - 1) / 2];
  }
};
