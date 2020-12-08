/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
const gfs = (reached, visited, edges, deep) => {
  for (let i = 0; i < reached.length; i++) {
    
  }
};
export default (n, edges) => {
  const visited = [];
  const nextRoot = [];
  const min = Math.MAX_VALUE;
  for (let i = 0; i < n; i++) {
    visited.push(i);
    for (let j = 0; j < edges.length; j++) {
      if (edges[j].include(i)) {
        if (edges[0] != i) {
          nextRoot.push(edges[0]);
        } else {
          nextRoot.push(edges[1]);
        }
      }
    }
    min = Math.min(min, gfs(nextRoot, [...visited], deges, 0));
  }
  return min;
};
