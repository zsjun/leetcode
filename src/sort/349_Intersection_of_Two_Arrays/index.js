/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
export default (nums1, nums2) => {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let minLenArr = nums2.length > nums1.length ? nums1 : nums2;
  let maxLenArr = nums2.length > nums1.length ? nums2 : nums1;
  let res = [];
  let j = 0;
  for (let i = 0; i < minLenArr.length; i++) {
    if (maxLenArr.includes(minLenArr[i]) && !res.includes(minLenArr[i])) {
      res.push(minLenArr[i]);
    }
    // while (j < maxLenArr.length) {
    //   if (maxLenArr[j] === minLenArr[i]) {
    //     res.push(minLenArr[i]);
    //     while (maxLenArr[j + 1] === maxLenArr[j]) {
    //       j++;
    //     }
    //     j++;
    //   } else {
    //     if (maxLenArr[j] > minLenArr[i]) {
    //       break;
    //     } else {
    //       j++;
    //     }
    //   }
    // }
  }
  return res;
};
