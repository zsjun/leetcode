/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
export default (intervals, newInterval) => {
  let res = [];
  intervals.push(newInterval);
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < intervals.length; i++) {
    if (i + 1 < intervals.length && intervals[i][1] >= intervals[i + 1][0]) {
      intervals[i + 1][0] = Math.min(intervals[i][0], intervals[i + 1][0]);
      intervals[i + 1][1] = Math.max(intervals[i][1], intervals[i + 1][1]);
    } else {
      res.push([intervals[i][0], intervals[i][1]]);
    }
  }
  return res;
};
