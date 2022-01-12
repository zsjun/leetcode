var findMedianSortedArrays = function (nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;
  if (m > n) {
    const temp = nums1;
    nums1 = nums2;
    nums2 = temp;

    const temp1 = m;
    m = n;
    n = temp1;
  }
  if (n === 0) return;

  let imin = 0;
  let imax = m;
  // half_len 一半的数目
  let half_len = Math.floor((m + n + 1) / 2);
  // n 大于m
  while (imin < imax) {
    let i = Math.floor((imin + imax) / 2);
    let j = half_len - i;
    let max_of_left;
    let min_of_right;
    if (i < m && nums2[j - 1] > nums1[i]) {
      imin = i + 1;
    } else if (i > 0 && nums1[i - 1] > nums2[j]) {
      imax = i - 1;
    } else {
      if (i === 0) {
        max_of_left = nums2[j - 1];
      } else if (j === 0) {
        max_of_left = nums1[i - 1];
      } else {
        max_of_left = Math.max(nums1[i - 1], nums2[j - 1]);
      }
      if ((m + n) % 2 === 1) {
        return max_of_left;
      }
      if (i === m) {
        min_of_right = nums2[j];
      } else if (j === n) {
        min_of_right = nums1[i];
      } else {
        min_of_right = Math.min(nums1[i], nums2[j]);
      }
      return (max_of_left + min_of_right) / 2.0;
    }
  }
};
