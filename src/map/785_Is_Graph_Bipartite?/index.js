/**
 * @param {number[][]} graph
 * @return {boolean}
 */

// 把node染成红色或者黄色
const isValidColor = (graph, colors, color, node) => {
  // 如果已经被染色过了
  if (colors[node] !== 0) {
    // 看下是不是和需要染的颜色一样
    return colors[node] === color;
  }
  // 如果没有被染色过，则把节点染成颜色
  colors[node] = color;
  // 然后把相邻的节点都染成颜色
  for (let next of graph[node]) {
    if (!isValidColor(graph, colors, -color, next)) {
      return false;
    }
  }
  return true;
};
// Runtime: 88 ms, faster than 70.08% of JavaScript online submissions for Is Graph Bipartite?.
// Memory Usage: 41.1 MB, less than 79.22% of JavaScript online submissions for Is Graph Bipartite.
export default (graph) => {
  const len = graph.length;

  // 0没有被染色过，1 染成红色， -1 染成黄色
  const colors = new Array(len).fill(0);

  for (let i = 0; i < len; i++) {
    if (colors[i] === 0 && !isValidColor(graph, colors, 1, i)) {
      return false;
    }
  }

  return true;
};
