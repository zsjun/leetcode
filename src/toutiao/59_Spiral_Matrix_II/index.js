/*
 * @Description:
 * @Author:
 * @Date: 2021-07-06 10:14:37
 * @LastEditTime: 2021-07-06 11:08:39
 * @LastEditors: zsj
 * @Usage:
 */
/**
 * @param {number} n
 * @return {number[][]}
 */
const fill = (res, rowBegin, rowEnd, colBegin, colEnd, beginNumber, endNumber) => {
  if (beginNumber >= endNumber) return;
  for (let index = colBegin; index < colEnd; index++) {
    beginNumber++;
    res[rowBegin][index] = beginNumber;
  }
  for (let i = rowBegin + 1; i < rowEnd; i++) {
    beginNumber++;
    res[i][colEnd - 1] = beginNumber;
  }
  for (let i = colEnd - 2; i >= colBegin; i--) {
    beginNumber++;
    res[rowEnd - 1][i] = beginNumber;
  }
  for (let i = rowEnd - 2; i > rowBegin; i--) {
    beginNumber++;
    res[i][colBegin] = beginNumber;
  }

  fill(res, rowBegin + 1, rowEnd - 1, colBegin + 1, colEnd - 1, beginNumber, endNumber);
};
// Runtime: 64 ms, faster than 99.67% of JavaScript online submissions for Spiral Matrix II.
// Memory Usage: 39.1 MB, less than 13.95% of JavaScript online submissions for Spiral Matrix II.
// 写算法，首先要逻辑清晰，如果越想越乱，说明你的思路是有问题的。
export default (n) => {
  if (n < 1) return [];
  const res = new Array(n);
  for (let i = 0; i < n; i++) {
    res[i] = new Array(n);
  }
  fill(res, 0, n, 0, n, 0, n * n);
  return res;
};
