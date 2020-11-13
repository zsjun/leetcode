/**
 * @param {number[][]} points
 * @return {number}
 */
export default (points) => {
  const rowLen = points.length;
  if (rowLen === 0) return 0;
  points.sort((a, b) => a[1] - b[1]);
  let count = 1;
  // 首先使用最大的箭头，可以射到最多的
  let arrowNum = points[0][1];
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > arrowNum) {
      count++;
      arrowNum = points[i][1];
    }
  }
  return count;
};
