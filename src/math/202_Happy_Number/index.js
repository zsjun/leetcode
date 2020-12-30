/**
 * @param {number} n
 * @return {boolean}
 */
// Runtime: 96 ms, faster than 35.42% of JavaScript online submissions for Happy Number.
// Memory Usage: 39.9 MB, less than 71.78% of JavaScript online submissions for Happy Number.
export default (n) => {
  const inLoop = new Set();
  let squareSum;
  let remain;
  while (!inLoop.has(n)) {
    inLoop.add(n);
    squareSum = 0;
    while (n > 0) {
      remain = n % 10;
      squareSum += remain * remain;
      n = Math.floor(n / 10);
    }
    if (squareSum === 1) {
      return true;
    } else {
      n = squareSum;
    }
  }
  return false;
};
