/**
 * @param {number[]} nums
 * @return {number}
 */

export default (nums) => {
  if (!nums || nums.length === 0) return 0;
  const set = new Set();
  // 去重
  for (let n of nums) {
    set.add(n);
  }
  let res = 0;
  for (let n of set) {
    if (!set.has(n - 1)) {
      // 从小到大检查
      let m = n + 1;
      while (set.has(m)) {
        m++;
      }
      res = Math.max(res, m - n);
    }
  }
  return res;
};
