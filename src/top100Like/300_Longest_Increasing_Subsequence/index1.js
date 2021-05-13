/**
 * @param {number[]} nums
 * @return {number}
 */
// [10, 9, 2, 5, 3, 7, 101, 18];
// Runtime: 84 ms, faster than 93.70% of JavaScript online submissions for Longest Increasing Subsequence.
// Memory Usage: 40.6 MB, less than 27.00% of JavaScript online submissions for Longest Increasing Subsequence.
// 为了达到lgn，所以使用类似于单调栈的方法，
// 这种方法应该一般很难想到，为了让它时间单调递增，必须不断的替换
// 加深单调栈的印象，这次根本就没想到单调栈
export default (nums) => {
  const len = nums.length;
  const tails = new Array(len).fill(0);
  let size = 0;
  for (let x of nums) {
    let i = 0,
      j = size;
    while (i !== j) {
      let m = (i + j) >> 1;
      if (tails[m] < x) i = m + 1;
      else j = m;
    }
    tails[i] = x;
    if (i === size) ++size;
  }
  return size;
};
