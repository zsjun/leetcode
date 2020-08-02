/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
export default (x, y) => {
  let z = x ^ y;
  let bits = 0;
  console.log(z.toString(2));
  while (z !== 0) {
    bits++;
    z &= z - 1;
  }
  return bits;
};
