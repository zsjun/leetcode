/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function (intervals) {
  intervals.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      return b[1] - a[1];
    }
  });
  const len = intervals.length;
  let res = 0;
  for (let i = 0; i < intervals.length - 1; ) {
    if (
      intervals[i][1] > intervals[i + 1][0] &&
      intervals[i][1] >= intervals[i + 1][1]
    ) {
      res++;
      intervals[i + 1][0] = Math.min(intervals[i][0], intervals[i + 1][0]);
      intervals[i + 1][1] = Math.max(intervals[i][1], intervals[i + 1][1]);
      i++;
    } else {
      i++;
    }
  }
  return len - res;
};
