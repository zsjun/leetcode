/**
 * @param {number} c
 * @return {boolean}
 */

export default (c) => {
  let high = Math.ceil(Math.sqrt(c));
  let low = 0;
  while (low <= high) {
    if (Math.pow(low, 2) + Math.pow(high, 2) === c) {
      return true;
    } else if (Math.pow(low, 2) + Math.pow(high, 2) > c) {
      high--;
    } else {
      low++;
    }
  }
  return false;
};
