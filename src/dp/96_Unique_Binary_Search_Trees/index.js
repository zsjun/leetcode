/**
 * @param {number} n
 * @return {number}
 */
export default (n) => {
  let g = new Array(n + 1);
  // g[i] 表示有i个元素可以表示的搜索二叉树数目
  g[0] = 1;
  g[1] = 1;
  g.fill(0, 2, n + 1);
  for (let i = 2; i <= n; i++) {
    // g[i] 等于小于所有小于i的数的二叉搜索树的个数和所有大于i的二叉搜索树的个数的和
    for (let j = 1; j <= i; j++) {
      g[i] += g[j - 1] * g[i - j];
    }
  }
  return g[n];
};
