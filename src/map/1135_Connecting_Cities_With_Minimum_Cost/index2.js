export default (n, connections) => {
  let res = 0;
  const visited = [1];
  while (visited.length !== n) {
    let min = Number.MAX_VALUE;
    let minNode;
    for (let i = 0; i < visited.length; i++) {
      for (let conn of connections) {
        const a = conn[0];
        const b = conn[1];
        const cost = conn[2];
        if (visited[i] === a && !visited.includes(b)) {
          if (cost < min) {
            min = cost;
            minNode = b;
          }
        } else if (visited[i] === b && !visited.includes(a)) {
          if (cost < min) {
            min = cost;
            minNode = a;
          }
        }
      }
    }
    if (minNode) {
      visited.push(minNode);
      res += min;
    } else {
      return -1;
    }
  }
  return res;
};
