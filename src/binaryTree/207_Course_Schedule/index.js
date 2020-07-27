/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const dfs_search = (prerequisites, visited, i) => {
  for (let i = 0; i < prerequisites.length; i++) {
    if (prerequisites[i][1] === i && visited[i] < 0) {
      visited[i] = i;
    } else if (prerequisites[i][0] === i && visited[prerequisites[i][1]] < 0) {
      dfs_search(prerequisites, visited, prerequisites[i][1]);
      if (visited[prerequisites[i][1]] > 0) {
        visited[i] = i;
      } else {
        visited = -1;
      }
    } else if (prerequisites[i][0] === i && visited[prerequisites[i][1]] >= 0) {
      visited[i] = i;
    }
  }
};
export default (numCourses, prerequisites) => {
  // 已经学习过的课程
  let visited = new Array(numCourses);
  for (let i = 0; i < numCourses; i++) {
    visited[i] = -1;
  }
  for (let i = 0; i < numCourses; i++) {
    if (visited[i] < -1) {
      dfs_search(prerequisites, visited, i);
    }
  }
  visited.forEach((item) => {
    if (item < 0) {
      return false;
    }
  });
  return true;
};
