/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
export default (numCourses, prerequisites) => {
  // 上过的课程
  const seen = new Set();
  // 没有上过的
  const seeing = new Set();
  const res = [];
  // 连接
  const adj = new Array(numCourses).map((r) => []);
  // v 依赖于u先完成
  for (let [u, v] of prerequisites) {
    adj[v].push(u);
  }
  // 依次深度遍历，如果都遍历过了，则返回true
  for (let c = 0; c < numCourses; c++) {
    if (!dfs(c)) {
      return [];
    }
  }
  return res.reverse();

  function dfs(v) {
    if (seen.has(v)) {
      return true;
    }
    if (seeing.has(v)) {
      return false;
    }

    seeing.add(v);
    for (let nv of adj[v]) {
      if (!dfs(nv)) {
        return false;
      }
    }
    seeing.delete(v);
    seen.add(v);
    res.push(v);
    return true;
  }
};
