// Runtime: 124 ms, faster than 73.74% of JavaScript online submissions for Median of Two Sorted Arrays.
// Memory Usage: 43.2 MB, less than 92.46% of JavaScript online submissions for Median of Two Sorted Arrays.
var findMedianSortedArrays = function (nums1, nums2) {

  if (nums1.length > nums2.length) {
    const temp = nums1;
    nums1 = nums2;
    nums2 = temp;
  }
  
  // nums1 是比较小的数组
  const nums1Len = nums1.length;
  const nums2Len = nums2.length;

  let low = 0;
  let high = nums1Len;
  const half_len = Math.floor((nums1Len + nums2Len + 1) / 2);

  while (low <= high) {
    // nums1 选取的数目, nums1Num
    const nums1Num = Math.floor((low + high) / 2);
    const nums2Num = half_len - nums1Num;

    const l1 = nums1Num === 0 ? Number.MIN_SAFE_INTEGER : nums1[nums1Num - 1];
    const l2 = nums2Num === 0 ? Number.MIN_SAFE_INTEGER : nums2[nums2Num - 1];
    const r1 =
      nums1Num === nums1Len ? Number.MAX_SAFE_INTEGER : nums1[nums1Num];
    const r2 =
      nums2Num === nums2Len ? Number.MAX_SAFE_INTEGER : nums2[nums2Num];

    if (l1 > r2) high = nums1Num - 1;
    else if (l2 > r1) low = nums1Num + 1;
    else
      return (nums1Len + nums2Len) % 2
        ? Math.max(l1, l2)
        : (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
  }
};
