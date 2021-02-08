/**
 * @param {number[][]} graph
 * @return {boolean}
 */

// Runtime: 84 ms, faster than 85.87% of JavaScript online submissions for Is Graph Bipartite?.
// Memory Usage: 41.7 MB, less than 39.34% of JavaScript online submissions for Is Graph Bipartite?.
export default (graph) => {
  const len = graph.length;
  // 0没有被染色过，1 染成红色， -1 染成黄色
  const colors = new Array(len).fill(0);

  for (let i = 0; i < len; i++) {
    if (colors[i] !== 0) continue;
    const queue = [];
    queue.push(i);
    colors[i] = 1;

    while (queue.length) {
      const cur = queue.shift();
      for (let next of graph[cur]) {
        if (colors[next] === 0) {
          colors[next] = -colors[cur];
          queue.push(next);
        } else if (colors[next] != -colors[cur]) {
          return false;
        }
      }
    }
  }

  return true;
};
