/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export default (a, b) => {
  // 进位标志，
  while (b !== 0) {
    let temp = a ^ b;
    b = (a & b) << 1;
    a = temp;
  }
  return a;
};
