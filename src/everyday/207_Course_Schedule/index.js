/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

var canFinish = function (numCourses, prerequisites) {
  const map = new Map();
  const degree = new Array(numCourses).fill(0);
  // 入度
  for (let i = 0; i < prerequisites.length; i++) {
    // 这里是不需要依赖任何课程的
    degree[prerequisites[i][1]]++;
    if (map.has(prerequisites[i][0])) {
      map.get(prerequisites[i][0]).push(prerequisites[i][1]);
    } else {
      map.set(prerequisites[i][0], [prerequisites[i][1]]);
    }
  }
  const finished = [];
  let count = 0;
  // 已经完成的了
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
      //
      if (degree[pointer] === 0) {
        finished.push(pointer);
        count++;
      }
    }
  }

  return count === numCourses ? true : false;
};
