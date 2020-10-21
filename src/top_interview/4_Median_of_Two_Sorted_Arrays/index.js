/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

export default (nums1, nums2) => {
  let m = nums1.length;
  let n = nums2.length;

  // 保持m是最小的
  if (m > n) {
    const temp = nums1;
    const temp1 = m;
    nums1 = nums2;
    m = n;
    nums2 = temp;
    n = temp1;
  }
  if (n === 0) {
    return false;
  }
  let imin = 0;
  let imax = m;
  let halfLen = Math.floor((m + n + 1) / 2);
  console.log(2332, halfLen);
  let max_of_left = 0;
  let min_of_right = 0;
  while (imin <= imax) {
    let i = Math.floor((imin + imax) / 2);
    let j = halfLen - i;

    if (i < m && nums2[j] > nums1[i]) {
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
      console.log(max_of_left, min_of_right);
      if ((m + n) % 2 !== 0) {
        return max_of_left;
      }
      if (i == m) {
        min_of_right = nums2[j];
      } else if (j === n) {
        min_of_right = nums1[i];
      } else {
        min_of_right = Math.min(A[i], B[j]);
      }

      return (max_of_left + min_of_right) / 2;
    }
  }
};
