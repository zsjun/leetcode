/**
 * @param {number[]} nums
 * @return {number}
 */
// 508 ms	39.9 MB
export default (nums) => {
  if (nums.length === 1) {
    return 0;
  }
  let res = 0;
  for (let j = nums.length - 1; j >= 1; ) {
    let min = j;
    for (let i = 0; i < j; i++) {
      if (nums[i] >= j - i) {
        min = Math.min(i, min);
      }
    }
    j = min;
    res++;
    if (min === 0) {
      return res;
    }
  }
  return res;
};
