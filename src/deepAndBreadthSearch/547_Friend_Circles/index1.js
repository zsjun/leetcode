/**
 * @param {number[][]} M
 * @return {number}
 */
const dfs = (M, i, circles) => {
  // 已经访问过了
  circles[i] = 1;
  // 遍历和自己有关系的朋友
  for (let j = 0; j < M.length; j++) {
    if (circles[j] === 0 && M[i][j] === 1 && j !== i) {
      dfs(M, j, circles);
    }
  }
};
// Runtime: 84 ms, faster than 86.26% of JavaScript online submissions for Friend Circles.
// Memory Usage: 40.2 MB, less than 94.94% of JavaScript online submissions for Friend Circles.
export default (M) => {
  if (M.length === 1) return 1;
  const m = M.length;
  const n = M[0].length;
  let res = 0;
  const circles = new Array(m).fill(0);
  // 最多一共有m个朋友圈
  for (let i = 0; i < m; i++) {
    if (circles[i] === 0) {
      dfs(M, i, circles);
      res++;
    }
  }
  return res;
};
