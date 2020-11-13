/**
 * @param {number[][]} points
 * @return {number}
 */
export default (points) => {
  const rowLen = points.length;
  if (rowLen === 0) return 0;
  const colLen = 2;
  points.sort((a, b) => a[0] - b[0]);
  let count = 1;
  let pre = points[0];
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] < pre[1]) {
      pre[0] = Math.max(points[i][0], pre[0]);
      pre[1] = Math.min(points[i][1], pre[1]);
    } else if (points[i][0] === pre[1]) {
      pre[0] = points[i][0];
      pre[1] = points[i][0];
    } else {
      pre = points[i];
      count++;
    }
  }
  return count;
};
