/**
 * @param {number} n
 * @return {string}
 */
// Runtime: 72 ms, faster than 88.06% of JavaScript online submissions for Excel Sheet Column Title.
// Memory Usage: 38.2 MB, less than 73.13% of JavaScript online submissions for Excel Sheet Column Title.
export default (n) => {
  if (n === 0) return "";
  let res = "";
  while (n > 0) {
    --n;
    const a = Math.floor(n / 26);
    const b = n % 26;
    res = String.fromCharCode("A".charCodeAt() + b) + res;
    n = a;
  }

  return res;
};
