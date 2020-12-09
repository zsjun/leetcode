/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
//  Runtime: 104 ms, faster than 90.27% of JavaScript online submissions for Minimum Height Trees.
//  Memory Usage: 46.4 MB, less than 81.88% of JavaScript online submissions for Minimum Height Trees.
export default (n, edges) => {
  if (n === 1) return [0];

  const adj = new Array(n);
  for (let i = 0; i < n; ++i) {
    adj[i] = new Set();
  }
  // 建立边的链接
  // 记录每个节点和它相连的节点个数
  for (let edge of edges) {
    adj[edge[0]].add(edge[1]);
    adj[edge[1]].add(edge[0]);
  }

  let leaves = new Set();
  for (let i = 0; i < n; ++i) {
    // 如果是叶子节点
    if (adj[i].size === 1) {
      leaves.add(i);
    }
  }
  // 因为没有环，结果要么是一个节点，要么是两个节点
  while (n > 2) {
    n -= leaves.size;
    const newLeaves = new Set();
    for (let i of leaves) {
      // 查找叶子节点，
      for (let j of adj[i]) {
        // 从连接的j节点中删除叶子节点
        adj[j].delete(i);
        // 如果也是叶子节点，加入叶子节点
        if (adj[j].size === 1) {
          newLeaves.add(j);
        }
      }
    }
    leaves = newLeaves;
  }
  return Array.from(leaves);
};
