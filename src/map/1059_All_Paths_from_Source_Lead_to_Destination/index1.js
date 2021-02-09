export default (n, edges, source, destination) => {
  const graph = new Array(n);

  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  const inDegrees = new Array(n).fill(0);

  for (let [key, val] of edges) {
    graph[key].push(val);
    ++inDegrees[val];
  }
  const queue = [source];

  while (queue.length) {
    const currNode = queue.shift();
    if (graph[currNode].length === 0 && currNode !== destination) {
      return fasle;
    }

    for (let node of graph[currNode]) {
      if (inDegrees[node] < 0) {
        return false;
      }
      --inDegrees[node];
      queue.push(node);
    }
  }

  return true;
};
