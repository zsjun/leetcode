/**
 * @param {number[][]} heightMap
 * @return {number}
 */
const isExit = (arr, val) => {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j].x === val.x && arr[j].y === val.y) {
      return true;
    }
  }
  return false;
};
export default (heightMap) => {
  // 标记是否访问过
  const markMap = [];
  const rowLen = heightMap.length;
  const colLen = heightMap[0].length;
  // 等待方位的元素列表
  let waitVisites = [];

  // 当行数小于3或者列数小于3的时候，不肯能存下雨水
  if (rowLen < 3 || colLen < 3) return 0;

  for (let i = 0; i < rowLen; i++) {
    markMap.push([]);
    for (let j = 0; j < colLen; j++) {
      // 如果是四个边角，则直接标记为已经访问过
      if (
        (i === 0 && j === 0) ||
        (i === rowLen - 1 && j === colLen - 1) ||
        (i === rowLen - 1 && j === 0) ||
        (i === 0 && j === colLen - 1)
      ) {
        markMap[i][j] = 1;
      } else {
        markMap[i][j] = 0;
        // 把周围的节点，加入到数组中
      }
    }
  }
  for (let j = 1; j < colLen; j++) {
    waitVisites.push({
      x: 0,
      y: j,
      height: heightMap[0][j],
    });
  }
  if (rowLen > 1) {
    for (let j = 1; j < colLen; j++) {
      waitVisites.push({
        x: rowLen - 1,
        y: j,
        height: heightMap[rowLen - 1][j],
      });
    }
  }
  for (let i = 1; i < rowLen; i++) {
    waitVisites.push({
      x: i,
      y: 0,
      height: heightMap[i][0],
    });
  }
  if (colLen > 1) {
    for (let i = 1; i < rowLen; i++) {
      waitVisites.push({
        x: i,
        y: colLen - 1,
        height: heightMap[i][colLen - 1],
      });
    }
  }

  // 排序数组,然后选择最小的，因为只有高度最小的才会被水漫过去
  waitVisites.sort((a, b) => a.height - b.height);
  // 按照上右下左的顺序访问周围的元素
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  // 最后可以储存水的数量
  let res = 0;
  while (waitVisites.length > 0) {
    // 取出第一个元素，也就是高度最小的元素
    const bar = waitVisites[0];
    const x = bar.x;
    const y = bar.y;
    const height = bar.height;
    // 把已经进入的去掉
    waitVisites.shift();
    markMap[x][y] = 1;
    // 从高度最矮的元素开始，上右下左查找，看看是否可以让谁漫进去
    for (let i = 0; i < 4; i++) {
      const newX = x + dx[i];
      const newY = y + dy[i];
      // 如果不合法，或者应该访问过了，则直接到下一个

      if (
        newX < 0 ||
        newX >= rowLen ||
        newY < 0 ||
        newY >= colLen ||
        (newX >= 0 && newX < rowLen && newY >= 0 && newY < colLen && markMap[newX][newY] === 1)
      ) {
        continue;
      }
      const newHeight = heightMap[newX][newY];

      if (newHeight < height) {
        res += height - newHeight;
        heightMap[newX][newY] = height;
      }
      if (!isExit(waitVisites, { x: newX, y: newY })) {
        waitVisites.push({
          x: newX,
          y: newY,
          height: heightMap[newX][newY],
        });
        waitVisites.sort((a, b) => a.height - b.height);
      }
    }
  }
  return res;
};
