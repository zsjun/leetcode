var merge = function (nums1, m, nums2, n) {
  var len = m + n;
  m--;
  n--;
  while (len--) {
    if (n < 0 || nums1[m] > nums2[n]) {
      nums1[len] = nums1[m];
      m--;
    } else {
      nums1[len] = nums2[n];
      n--;
    }
  }
};
