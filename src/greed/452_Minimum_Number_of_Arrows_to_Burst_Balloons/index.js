/**
 * @param {number[][]} points
 * @return {number}
 */
export default (points) => {
  const rowLen = points.length;
  if (rowLen === 0) return 0;
  const colLen = 2;
  points.sort((a, b) => a[0] - b[0]);
  let count = 0;
  let arrow = points[0];
  for (let i = 1; i < rowLen; i++) {
    if (points[i][0] <= arrow[1]) {
      if (points[i][1] >= arrow[1]) {
        arrow[0] = points[i][0];
      } else {
        arrow[1] = points[i][1];
      }
    } else if (points[i][0] > arrow[1]) {
      count++;
      arrow[0] = points[i][0];
      arrow[1] = points[i][1];
    }
  }
  return count + 1;
};
