/**
 * @param {number[][]} points
 * @return {number}
 */
// Runtime: 100 ms, faster than 79.41% of JavaScript online submissions for Max Points on a Line.
// Memory Usage: 44.2 MB, less than 63.24% of JavaScript online submissions for Max Points on a Line.
export default (points) => {
  const map = new Map();
  let max_count = 0;
  // 相同x坐标的数量
  let same_points_count = 0;
  // 相同y坐标的数量
  let same_y_count = 1;

  for (let i = 0; i < points.length; i++) {
    same_points_count = 0;
    same_y_count = 1;
    for (let j = i + 1; j < points.length; j++) {
      if (points[i][1] === points[j][1]) {
        ++same_y_count;
        if (points[i][0] === points[j][0]) {
          ++same_points_count;
        }
      } else {
        const temp = ((points[i][0] - points[j][0]) * 10000) / ((points[i][1] - points[j][1]) * 10000);
        if (map.has(temp)) {
          const tempArr = map.get(temp);
          const test =
            ((points[j][0] - tempArr[tempArr.length - 1][0]) * 10000) /
            ((points[j][1] - tempArr[tempArr.length - 1][1]) * 10000);
          if (
            test === temp ||
            (points[j][0] === tempArr[tempArr.length - 1][0] && points[j][1] === tempArr[tempArr.length - 1][1])
          ) {
            tempArr.push(points[j]);
          }
          map.set(temp, tempArr);
        } else {
          map.set(temp, [points[i], points[j]]);
        }
      }
    }
    max_count = Math.max(same_y_count, max_count);
    for (let value of map.values()) {
      max_count = Math.max(max_count, same_points_count + value.length);
    }
    map.clear();
  }
  return max_count;
};
