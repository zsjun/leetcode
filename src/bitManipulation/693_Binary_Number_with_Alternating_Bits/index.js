/**
 * @param {number} n
 * @return {boolean}
 */
export default (n) => {
  const m = n.toString(2);

  for (let i = m.length - 1; i >= 1; i--) {
    if (m[i] === m[i - 1]) {
      return false;
    }
  }
  return true;
};
