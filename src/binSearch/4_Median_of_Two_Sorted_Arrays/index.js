/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const getKth = (nums1, start1, end1, nums2, start2, end2, k) => {
  const len1 = end1 - start1 + 1;
  const len2 = end2 - start2 + 1;
  // 如果nums1的长度大于nums2的长度，改变两个数组的位置, 让数组长度最小的在前面，防止
  // 这里的nums2[start2 + k - 1]报错
  if (len1 > len2) return getKth(nums2, start2, end2, nums1, start1, end1, k);
  if (len1 === 0) return nums2[start2 + k - 1];
  if (k === 1) return Math.min(nums1[start1], nums2[start2]);

  const i = start1 + Math.min(len1, Math.floor(k / 2)) - 1;
  const j = start2 + Math.min(len2, Math.floor(k / 2)) - 1;

  const nums1End = Math.min(end1, i + 1);
  const nums2End = Math.min(end2, j + 1);
  if (nums1[i] > nums2[j]) {
    return getKth(nums1, start1, nums1End, nums2, j + 1, end2, k - (j - start2 + 1));
  } else {
    return getKth(nums1, i + 1, end1, nums2, start2, nums2End, k - (i - start1 + 1));
  }
};
export default (nums1, nums2) => {
  if (nums1.length === 0 && nums2.length === 1) {
    return nums2[0];
  }
  if (nums1.length === 1 && nums2.length === 0) {
    return nums1[0];
  }
  const nums1Len = nums1.length;
  const nums2Len = nums2.length;
  // 分别找到奇数和偶数的中位数的左边和右边
  const left = Math.floor((nums1Len + nums2Len + 1) / 2);
  const right = Math.floor((nums1Len + nums2Len + 2) / 2);
  // 如果是奇数，只寻找一次就可以了
  if ((nums1Len + nums2Len) % 2 !== 0) {
    return getKth(nums1, 0, nums1Len - 1, nums2, 0, nums2Len - 1, left);
  }
  return (
    (getKth(nums1, 0, nums1Len - 1, nums2, 0, nums2Len - 1, left) +
      getKth(nums1, 0, nums1Len - 1, nums2, 0, nums2Len - 1, right)) *
    0.5
  );
};
