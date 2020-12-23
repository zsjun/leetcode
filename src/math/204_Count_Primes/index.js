/**
 * @param {number} n
 * @return {number}
 */

// Runtime: 124 ms, faster than 92.38% of JavaScript online submissions for Count Primes.
// Memory Usage: 52.1 MB, less than 45.59% of JavaScript online submissions for Count Primes.
export default (n) => {
  const notPrime = new Array(n).fill(0);
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (notPrime[i] === 0) {
      count++;
      // 找到另外一个因子，如果存在另外一个因子，则不是质数
      for (let j = 2; i * j < n; j++) {
        notPrime[i * j] = 1;
      }
    }
  }

  return count;
};
