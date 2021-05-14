/**
 * @param {number[]} nums
 * @return {number}
 */

// Runtime: 92 ms, faster than 47.50% of JavaScript online submissions for Longest Consecutive Sequence.
// Memory Usage: 42 MB, less than 15.88% of JavaScript online submissions for Longest Consecutive Sequence.
// 这里我想到了使用map，但是在如何更新某个值前面和后面的时候，没有思考清楚，当时想的是把某个值前面和后面的所有值都给更新，
// 但是这里其实没有必要更新前面所有的，只需要更新开头和结束的就ok了。
// 这里其实很关键就是考虑到只需要更新边界的值就可以了。
export default (nums) => {
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
