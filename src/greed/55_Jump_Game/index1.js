/**
 * @param {number[]} nums
 * @return {boolean}
 */
export default (nums) => {
  // 只有一个元素，就是能达到
  if (nums.length === 1) return true;
  // 覆盖的范围
  let cover = 0;
  for (let i = 0; i <= cover; i++) {
    // 注意这里是小于等于cover
    cover = Math.max(i + nums[i], cover);
    if (cover >= nums.length - 1) return true; // 说明可以覆盖到终点了
  }
  return false;
};
