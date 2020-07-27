/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const updateVisited = (prerequisites, visited, target) => {
  for (let i = 0; i < prerequisites.length; i++) {
    if (prerequisites[i][0] === target) {
      visited[prerequisites[i][1]]--;
    }
  }
};
const hasZero = (arr) => {
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      flag = true;
      break;
    }
  }
  return flag;
};
export default (numCourses, prerequisites) => {
  // 已经学习过的课程
  let visited = new Array(numCourses);
  for (let i = 0; i < numCourses; i++) {
    visited[i] = 0;
  }
  for (let i = 0; i < prerequisites.length; i++) {
    visited[prerequisites[i][1]] += 1;
  }
  let hasVisited = 0;

  while (hasZero(visited)) {
    for (let i = 0; i < numCourses; i++) {
      if (visited[i] === 0) {
        hasVisited++;
        visited[i] = -1;
        updateVisited(prerequisites, visited, i);
      }
    }
  }

  return hasVisited === numCourses;
};
