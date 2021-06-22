/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// Runtime: 84 ms, faster than 96.89% of JavaScript online submissions for Course Schedule.
// Memory Usage: 41.9 MB, less than 96.05% of JavaScript online submissions for Course Schedule.
// 涉及到图的一般都会有出度和入度，尤其是涉及到环的，涉及到入度和出度
export default (numCourses, prerequisites) => {
  const map = new Map();
  const degree = new Array(numCourses).fill(0);
  for (let i = 0; i < prerequisites.length; i++) {
    // 依赖
    degree[prerequisites[i][1]]++;
    if (map.has(prerequisites[i][0])) {
      map.get(prerequisites[i][0]).push(prerequisites[i][1]);
    } else {
      map.set(prerequisites[i][0], [prerequisites[i][1]]);
    }
  }
  const finished = [];
  let count = 0;
  for (let i = 0; i < degree.length; i++) {
    if (degree[i] === 0) {
      finished.push(i);
      count++;
    }
  }
  while (finished.length > 0) {
    let course = finished.pop();
    if (!map.get(course) || map.get(course).length === 0) continue;
    for (let i = 0; i < map.get(course).length; i++) {
      const pointer = map.get(course)[i];
      degree[pointer]--;
      if (degree[pointer] == 0) {
        finished.push(pointer);
        count++;
      }
    }
  }

  return count === numCourses ? true : false;
};
