/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

export default (x, y) => {
  let z = x ^ y;
  let res = 0;
  while (z != 0) {
    res++;
    z &= z - 1;
  }
  return res;
};
