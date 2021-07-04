/**
 * @param {number} n
 * @return {string}
 */
//  Runtime: 68 ms, faster than 96.05% of JavaScript online submissions for Thousand Separator.
//  Memory Usage: 39.2 MB, less than 5.92% of JavaScript online submissions for Thousand Separator.
export default (n) => {
  n = n.toString();
  if (n.length <= 3) return n;
  const arr = [];
  let count = 0;
  for (let i = n.length - 1; i >= 0; i--) {
    arr.unshift(n.charAt(i));
    count++;
    if (count === 3 && i !== 0) {
      arr.unshift(".");
      count = 0;
    }
  }
  return arr.join("");
};
