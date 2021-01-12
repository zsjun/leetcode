/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
const remove = (arr = [], val) => {
  // 从数组中移除等于val的值
  let valIndex = -1;
  for (let i = 0; i < arr.length; i++) {
    if (val === arr[i]) {
      valIndex = i;
      break;
    }
  }
  arr.splice(valIndex, 1);
};
// Runtime: 404 ms, faster than 45.76% of JavaScript online submissions for The Skyline Problem.
// Memory Usage: 47.4 MB, less than 53.94% of JavaScript online submissions for The Skyline Problem.
export default (buildings) => {
  const res = [];
  const height = [];
  const pq = [0];
  let prevMax = 0;

  for (let b of buildings) {
    // 起始点
    height.push([b[0], -b[2]]);
    // 结束点
    height.push([b[1], b[2]]);
  }
  height.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    // 首先按照第一个排序，如果第一个相同，按照第二个排序
    return a[0] - b[0];
  });

  for (let h of height) {
    // 遇到起点，加入
    if (h[1] < 0) {
      pq.push(-h[1]);
    } else {
      // 遇到末尾，删除
      remove(pq, h[1]);
    }

    let maxV = Math.max(...pq);
    if (prevMax !== maxV) {
      // 如果高度变化了，就加入结果
      res.push([h[0], maxV]);
      prevMax = maxV;
    }
  }
  return res;
};
