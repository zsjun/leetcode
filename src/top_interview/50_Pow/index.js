/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
export default (x, n) => {
  if (n === 0) return 1;
  if (x === 1) return 1;
  if (x === -1) return n % 2 === 0 ? 1 : -1;
  let res = 1;
  if (n > 0) {
    while (n--) {
      res *= x;
    }
    return res;
  }

  if (n < 0) {
    let absN = Math.abs(n);
    while (absN--) {
      res *= x;
    }
    return 1 / res;
  }
};
