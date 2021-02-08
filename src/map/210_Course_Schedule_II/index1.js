/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

// Runtime: 136 ms, faster than 29.13% of JavaScript online submissions for Course Schedule II.
// Memory Usage: 44.3 MB, less than 49.13% of JavaScript online submissions for Course Schedule II.
export default (numCourses, prerequisites) => {
  const inDegrees = new Array(numCourses).fill(0);
  for (const [val] of prerequisites) {
    // 获取每个节点的入度
    inDegrees[val]++;
  }
  const queue = [];
  for (let i = 0; i < inDegrees.length; i++) {
    if (inDegrees[i] === 0) {
      // 把入度为0的节点加入到队列中
      queue.push(i);
    }
  }
  const res = [];
  while (queue.length) {
    const first = queue.shift();
    // 节点的个数减去一
    numCourses--;
    res.push(first);
    for (const [val0, val1] of prerequisites) {
      if (val1 === first) {
        --inDegrees[val0];
        if (inDegrees[val0] === 0) {
          queue.push(val0);
        }
      }
    }
  }
  return numCourses === 0 ? res : [];
};
