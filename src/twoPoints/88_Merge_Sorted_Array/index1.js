/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// [0];
// (0)[1];
// 1;
export default (nums1, m, nums2, n) => {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  for (let m1 = m; m1 < m + n; m1++) {
    nums1[m1] = 0;
  }

  while (k >= 0) {
    if (nums2[j] >= nums1[i]) {
      nums1[k] = nums2[j];
      k--;
      j--;
    } else {
      if (i < 0 && j >= 0) {
        while (j >= 0) {
          nums1[k] = nums2[j];
          k--;
          j--;
        }
      } else if (j < 0 && i >= 0) {
        while (i >= 0) {
          nums1[k] = nums1[i];
          k--;
          i--;
        }
      } else if (i >= 0 && j >= 0) {
        nums1[k] = nums1[i];
        k--;
        i--;
      } else {
        k--;
      }
    }
  }
  return nums1;
};
