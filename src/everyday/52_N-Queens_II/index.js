/*
 * @Description:
 * @Author: zsj
 * @Date: 2021-07-07 12:36:34
 * @LastEditTime: 2021-07-07 13:29:48
 * @LastEditors: zsj
 * @Usage:
 */
/**
 * @param {number} n
 * @return {number}
 */
const backtracking = (row, cols, d1, d2, n, res) => {
  // 如果到底了，结果加1
  if (row === n) res[0]++;

  for (let col = 0; col < n; col++) {
    // 主对角线
    let id1 = col - row + n;
    // 副对角线
    let id2 = col + row;
    //
    if (cols[col] || d1[id1] || d2[id2]) continue;
    cols[col] = true;
    d1[id1] = true;
    d2[id2] = true;
    backtracking(row + 1, cols, d1, d2, n, res);
    cols[col] = false;
    d1[id1] = false;
    d2[id2] = false;
  }
};
// Runtime: 68 ms, faster than 99.63% of JavaScript online submissions for N-Queens II.
// Memory Usage: 39.1 MB, less than 57.12% of JavaScript online submissions for N-Queens II.
// 解释 https://leetcode.wang/leetCode-52-N-QueensII.html
export default (n) => {
  const res = [0];
  const cols = new Array(n).fill(false); // 列
  const d1 = new Array(2 * n).fill(false); // 主对角线
  const d2 = new Array(2 * n).fill(false); // 副对角线
  backtracking(0, cols, d1, d2, n, res);
  return res[0];
};
