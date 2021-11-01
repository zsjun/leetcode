/**
 * @param {number[]} nums
 * @return {number}
 */
// [1, 1, 1, 2, 2, 2, 3, 3];
// Runtime: 80 ms, faster than 91.38% of JavaScript online submissions for Remove Duplicates from Sorted Array II.
// Memory Usage: 40.6 MB, less than 63.97% of JavaScript online submissions for Remove Duplicates from Sorted Array II.
export default (nums) => {
  if (!nums.length) {
    return 0;
  }
  let start = 0;
  for (let i = 1; i <= nums.length; ++i) {
    if (nums[i] !== nums[i - 1]) {
      // 如果超过了2个
      if (i - start - 2 > 0) {
        // 原地把多余的删掉
        const cur = start + 2;
        // 从当前位置删除多少个元素
        nums.splice(cur, i - start - 2);
        // 原地删除
        i = start;
      }
      start = i;
    }
  }
  return nums.length;
};
