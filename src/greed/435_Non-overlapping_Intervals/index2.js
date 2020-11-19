/**
 * @param {number[][]} intervals
 * @return {number}
 */

export default (intervals) => {
  if (!intervals || intervals.length < 2) return 0;
  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });
  let count = 0;
  for (let i = 1; i < intervals.length; ) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      if (intervals[i][1] > intervals[i - 1][1]) {
        intervals.splice(i, 1);
      } else {
        intervals.splice(i - 1, 1);
      }
      count++;
    } else {
      i++;
    }
  }
  return count;
};
