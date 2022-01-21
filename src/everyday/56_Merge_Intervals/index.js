/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const res = [];
  if (intervals.length === 1) return intervals;
  intervals.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });
  res[0] = [...intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= res[res.length - 1][1]) {
      res[res.length - 1][1] =
        res[res.length - 1][1] > intervals[i][1]
          ? res[res.length - 1][1]
          : intervals[i][1];
    } else {
      res.push([...intervals[i]]);
    }
  }
  return res;
};
