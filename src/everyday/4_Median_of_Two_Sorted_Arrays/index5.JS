var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  let low = 0;
  let high = nums1.length;
  const halfLen = Math.floor((nums1.length + nums2.length + 1) / 2);
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let l1 = mid < 1 ? Number.MIN_SAFE_INTEGER : nums1[mid - 1];
    const r1 = mid >= nums1.length ? Number.MAX_SAFE_INTEGER : nums1[mid];
    const l2 =
      halfLen - mid < 1 ? Number.MIN_SAFE_INTEGER : nums2[halfLen - mid - 1];
    const r2 =
      halfLen - mid >= nums2.length
        ? Number.MAX_SAFE_INTEGER
        : nums2[halfLen - mid];

    if (l2 > r1) {
      low = mid + 1;
    } else if (l1 > r2) {
      high = mid - 1;
    } else {
      if ((nums1.length + nums2.length) % 2 === 1) {
        return Math.max(l1, l2);
      } else {
        return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
      }
    }
  }
};
