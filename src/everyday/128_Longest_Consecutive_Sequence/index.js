/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (!nums || nums.length === 0) return 0;
  const map = new Map();
  let res = 0;
  for (let n of nums) {
    if (!map.has(n)) {
      const left = map.get(n - 1) ? map.get(n - 1) : 0;
      const right = map.get(n + 1) ? map.get(n + 1) : 0;
      const sum = left + right + 1;
      map.set(n, sum);
      res = Math.max(res, sum);

      // 更新边界,因为这里是求连续的，所以只需要更新边界上的值就可以了
      map.set(n + right, sum);
      map.set(n - left, sum);
    }
  }
  return res;
};
