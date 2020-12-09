/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
const gfs = (reached, visited, edges, deep) => {
  if (reached.length === 0) {
    return deep;
  }
  const nextRoot = [];
  for (let i = 0; i < reached.length; i++) {
    visited.push(reached[i]);
    for (let j = 0; j < edges.length; j++) {
      if (edges[j].includes(reached[i])) {
        if (edges[j][0] !== reached[i] && !visited.includes(edges[j][0])) {
          nextRoot.push(edges[j][0]);
        } else if (!visited.includes(edges[j][1])) {
          nextRoot.push(edges[j][1]);
        }
      }
    }
  }
  return gfs(nextRoot, visited, edges, deep + 1);
};
export default (n, edges) => {
  let min = Number.MAX_VALUE;
  let res = [];
  for (let i = 0; i < n; i++) {
    let visited = [];
    const nextRoot = [];
    visited.push(i);
    for (let j = 0; j < edges.length; j++) {
      if (edges[j].includes(i)) {
        if (edges[j][0] !== i && !visited.includes(edges[j][0])) {
          nextRoot.push(edges[j][0]);
        } else if (!visited.includes(edges[j][1])) {
          nextRoot.push(edges[j][1]);
        }
      }
    }
    const deep = gfs(nextRoot, visited, edges, 0);
    console.log(i, deep);
    min = Math.min(min, deep);
    res.push({
      node: i,
      deep,
    });
  }
  res = res
    .filter((item) => item.deep === min)
    .map((item) => {
      return item.node;
    });
  console.log(res);
  return res;
};
