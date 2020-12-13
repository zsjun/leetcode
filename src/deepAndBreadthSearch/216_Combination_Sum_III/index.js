/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
// Runtime: 80 ms, faster than 60.82% of JavaScript online submissions for Combination Sum III.
// Memory Usage: 39.7 MB, less than 28.57% of JavaScript online submissions for Combination Sum III.
const backTracking = (k, n, level, loopRes, res) => {
  let sum = 0;
  if (loopRes.length > 0) {
    sum = loopRes.reduce((a, b) => a + b);
  }
  if (sum === n && loopRes.length === k) {
    res.push(loopRes);
    return;
  }
  if (level > 9 || sum > n) {
    return;
  }
  for (let i = level; i <= 9; i++) {
    // 改变状态
    loopRes.push(i);
    backTracking(k, n, i + 1, [...loopRes], res);
    loopRes.pop(i);
  }
};
export default (k, n) => {
  const res = [];
  backTracking(k, n, 1, [], res);
  console.log(res);
  return res;
};
