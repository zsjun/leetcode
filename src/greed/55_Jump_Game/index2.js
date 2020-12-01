/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 68 ms	39.6 MB
export default (nums) => {
  const len = nums.length;
  let reach = 0;
  for (let i = 0; i < len; ++i) {
    // 走不到i的位置，也就是可以直接return false
    if (i > reach) {
      return false;
    }
    // 到达终点了
    if (reach >= len - 1) {
      return true;
    }
    // 更新可以到达的位置
    reach = Math.max(reach, i + nums[i]);
  }
  return false;
};
