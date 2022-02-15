/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function (nums1, nums2) {
  const len1 = nums1.length;
  const len2 = nums2.length;
  if (len2 < len1) {
    return findMedianSortedArrays(nums2, nums1);
  }
  let nums1Index = Math.floor(len1 / 2);
  const half = Math.floor((len1 + len2 + 1) / 2);
  //  这里失败的原因，是没有搞清楚，低和高之间应该如何流动
  while (nums1Index >= 0 && nums1Index < len1) {
    const nums2Index = half - nums1Index;
    if (nums2Index + 1 < len2 && nums1[nums1Index] > nums2[nums2Index + 1]) {
      nums1Index = Math.floor(nums1Index / 2);
    } else if (
      nums2Index >= 0 &&
      nums1Index + 1 < len1 &&
      nums2[nums2Index] > nums1[nums1Index + 1]
    ) {
      nums1Index = Math.floor((nums1Index + len1) / 2);
    } else {
      if ((len1 + len2) % 2 === 0) {
        return Math.floor(
          (Math.max(nums1[nums1Index], nums2[nums2Index]) +
            Math.min(nums1[nums1Index + 1], nums2[nums2Index + 1])) /
            2
        );
      } else {
        return Math.max(nums1[nums1Index], nums2[half - nums1Index]);
      }
    }
  }
};
