/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
const remove = (arr = [], val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      arr.splice(i, 1);
      return;
    }
  }
};

var getSkyline = function (buildings) {
  // 最后的结果
  const res = [];

  // 所有的节点
  const points = [];

  for (let i = 0; i < buildings.length; i++) {
    // 表示起始点
    points.push([buildings[i][0], -buildings[i][2]]);
    // 表示结束点
    points.push([buildings[i][1], buildings[i][2]]);
  }
  // 排序所有节点

  points.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });
  // 表示遍历过的高度的数组
  const pq = [0];
  // 表示遍历过的高度的数组pq的最大值
  let pqMaxVal = 0;

  for (let i = 0; i < points.length; i++) {
    if (points[i][1] < 0) {
      pq.push(-points[i][1]);
    } else {
      remove(pq, points[i][1]);
    }
    const tempMaxVal = Math.max(...pq);
    if (tempMaxVal !== pqMaxVal) {
      res.push([points[i][0], tempMaxVal]);
      pqMaxVal = tempMaxVal;
    }
  }
  return res;
};
