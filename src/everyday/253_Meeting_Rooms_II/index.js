/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  let nums = [];

  // 转换为上下车问题
  for (let [u, v] of intervals) {
    nums.push([u, 1]);
    nums.push([v, -1]);
  }
  nums.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

  let res = 0;
  let cur = 0;
  for (let [time, e] of nums) {
    cur += e;
    res = Math.max(cur, res);
  }
  return res;
};
