/**
 * @param {number} n
 * @return {number}
 */

const numSquares = (n) => {
  const sqrtN = Math.ceil(Math.sqrt(n));
  let min = n - 1;
  for (let i = sqrtN; i > 1; i--) {
    if (n > Math.pow(i, 2)) {
      min = Math.min(min, numSquares(n - Math.pow(i, 2)));
    } else if (n === Math.pow(i, 2)) {
      min = 0;
      break;
    }
  }
  return min + 1;
};

export default numSquares;
