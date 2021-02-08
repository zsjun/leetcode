/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
// Runtime: 152 ms, faster than 20.40% of JavaScript online submissions for Course Schedule II.
// Memory Usage: 42.6 MB, less than 87.92% of JavaScript online submissions for Course Schedule II.
export default (numCourses, prerequisites) => {
  const res = [];
  if (prerequisites.length === 0) {
    for (let i = 0; i < numCourses; i++) {
      res.push(i);
    }
    return res;
  }
  const indegree = new Array(numCourses).fill(0);
  const map = new Array(numCourses);
  for (let i = 0; i < numCourses; i++) {
    map[i] = [];
  }
  for (let i = 0; i < prerequisites.length; i++) {
    map[prerequisites[i][0]].push(prerequisites[i][1]);
    // 入度
    ++indegree[prerequisites[i][0]];
  }
  const queue = [];
  for (let i = 0; i < indegree.length; ++i) {
    // 首先把入度为0的课程加入到queue中
    if (!indegree[i]) {
      queue.push(i);
    }
  }
  // console.log(map, queue);
  while (queue.length > 0) {
    const first = queue.shift();
    if (!res.includes(first)) {
      res.push(first);
    }
    for (let k = 0; k < numCourses; k++) {
      const index = map[k].indexOf(first);
      if (index > -1) {
        map[k].splice(index, 1);
        --indegree[k];
        if (map[k].length === 0) {
          queue.push(k);
        }
      }
    }
  }
  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] !== 0) {
      return [];
    }
  }
  console.log(res);
  return res;
};
