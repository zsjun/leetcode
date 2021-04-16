function findKth(A1, s1, m, A2, s2, n, k) {
  if (m > n) return findKth(A2, s2, n, A1, s1, m, k);
  if (m == 0) return A2[s2 + k - 1];
  if (k == 1) return Math.min(A1[s1], A2[s2]);

  let i = Math.min(m, k >> 1),
    j = Math.min(n, k >> 1);
  if (A1[s1 + i - 1] < A2[s2 + j - 1]) {
    return findKth(A1, s1 + i, m - i, A2, s2, n, k - i);
  } else {
    return findKth(A1, s1, m, A2, s2 + j, n - j, k - j);
  }
}

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
  const l = (m + n + 1) >> 1;
  const r = (m + n + 2) >> 1;
  if (l === r) {
    return findKth(nums1, 0, m, nums2, 0, n, l);
  }
  return (findKth(nums1, 0, m, nums2, 0, n, l) + findKth(nums1, 0, m, nums2, 0, n, r)) / 2;
};

export default findMedianSortedArrays;
