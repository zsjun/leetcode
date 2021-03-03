/**
 * @param {number[]} nums
 * @return {number}
 */
export default (nums) => {
  const len = nums.length;
  const set = new Set(...nums);
  for (let i = 0; i <= len; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
};
