/**
 * @param {number[][]} intervals
 * @return {number}
 */
export default (intervals) => {
  if (!intervals || intervals.length === 0 || intervals.length === 1) return 0;
  intervals.sort((a, b) => a[1] - b[1]);
  let min = 0;
  for (let i = 1; i < intervals.length; ) {
    if (
      (intervals[i][0] < intervals[i - 1][1] && intervals[i][0] >= intervals[i - 1][0]) ||
      intervals[i][0] < intervals[i - 1][0]
    ) {
      min++;
      intervals.splice(i, 1);
    } else {
      i++;
    }
  }
  return min;
};
