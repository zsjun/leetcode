/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
// Runtime: 152 ms, faster than 20.40% of JavaScript online submissions for Course Schedule II.
// Memory Usage: 42.6 MB, less than 87.92% of JavaScript online submissions for Course Schedule II.
export default (numCourses, prerequisites) => {
  const res = [];
  const queue = [];
  const graph = new Map();
  const indegree = new Array(numCourses).fill(0);

  for (const [e, v] of prerequisites) {
    // build graph map
    if (graph.has(v)) {
      graph.get(v).push(e);
    } else {
      graph.set(v, [e]);
    }
    // build indegree array
    indegree[e]++;
  }

  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  while (queue.length) {
    const first = queue.shift();
    if (graph.has(first)) {
      for (const e of graph.get(first)) {
        indegree[e]--;
        if (indegree[e] === 0) queue.push(e);
      }
    }
    res.push(first);
  }

  return numCourses === res.length ? res : [];
};
