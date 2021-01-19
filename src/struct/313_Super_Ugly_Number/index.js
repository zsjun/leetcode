/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
// (12)[(2, 7, 13, 19)];
// Runtime: 108 ms, faster than 75.00% of JavaScript online submissions for Super Ugly Number.
// Memory Usage: 41.7 MB, less than 87.50% of JavaScript online submissions for Super Ugly Number.
export default (n, primes) => {
  const ugly = new Array(n).fill(0);
  const primes2uglyIndexs = new Array(primes.length).fill(0);
  ugly[0] = 1;
  for (let i = 1; i < n; i++) {
    ugly[i] = Number.MAX_VALUE;
    for (let j = 0; j < primes.length; j++) {
      if (primes[j] * ugly[primes2uglyIndexs[j]] < ugly[i]) {
        ugly[i] = primes[j] * ugly[primes2uglyIndexs[j]];
      }
    }

    for (let j = 0; j < primes.length; j++) {
      if (primes[j] * ugly[primes2uglyIndexs[j]] === ugly[i]) {
        primes2uglyIndexs[j]++;
      }
    }
  }
  return ugly[n - 1];
};
