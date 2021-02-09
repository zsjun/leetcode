export default (n, edges, source, destination) => {
  const map = new Array(n);
  for (let i = 0; i < n; i++) {
    map[i] = [];
  }
  // 建立图
  for (let [val, val1] of edges) {
    map[val].push(val1);
  }

  const queue = [];
  if (map[source].length === 0) {
    return false;
  } else {
    queue = [...map[source]];
  }

  while (queue.length) {
    const firstNode = queue.shift();

    for (let i = 0; i < map[firstNode].length; i++) {
      if (map[firstNode][i] === firstNode) {
        return false;
      } else if (map[map[firstNode][i]].length === 0 && map[firstNode][i] !== destination) {
        return false;
      } else {
        queue.push(map[firstNode][i]);
      }
    }
  }
  return true;
};
