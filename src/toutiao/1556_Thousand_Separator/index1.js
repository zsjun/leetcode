/**
 * @param {number} n
 * @return {string}
 */
//  Runtime: 68 ms, faster than 96.05% of JavaScript online submissions for Thousand Separator.
//  Memory Usage: 39.2 MB, less than 5.92% of JavaScript online submissions for Thousand Separator.
export default (n) => {
  n = n.toString();
  if (n.length <= 3) return n;
  const arr = n.split("").reverse();
  let res = "";
  let count = -1;
  res = arr.reduce((a, b) => {
    count++;
    if (count === 3) {
      count = 0;
      return b + "." + a;
    } else {
      return b + a;
    }
  }, res);
  return res;
};
