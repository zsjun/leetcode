/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) return null;
  const hash = {};

  let queue = [node];
  const visited = new Set();

  // Iteration to create all Nodes
  while (queue.length) {
    const { val, neighbors } = queue.shift();
    if (!visited.has(val)) {
      hash[val] = new Node(val);
      visited.add(val);
      queue.push(...neighbors);
    }
  }

  // Iteration to add all neighbors
  queue = [node];
  visited.clear();
  while (queue.length) {
    const { val, neighbors } = queue.shift();
    if (!visited.has(val)) {
      neighbors.forEach((neighbor) => {
        hash[val].neighbors.push(hash[neighbor.val]);
      });
      visited.add(val);
      queue.push(...neighbors);
    }
  }

  return hash[node.val];
};
