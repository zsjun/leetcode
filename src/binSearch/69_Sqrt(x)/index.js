/**
 * @param {number} x
 * @return {number}
 */
export default (x) => {
  const halfX = Math.ceil(x / 2);
  let low = 1;
  let high = halfX;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low * low > x ? low - 1 : low + 1;
};
