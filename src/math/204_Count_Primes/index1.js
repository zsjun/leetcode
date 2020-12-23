/**
 * @param {number} n
 * @return {number}
 */

// Runtime: 120 ms, faster than 94.49% of JavaScript online submissions for Count Primes.
// Memory Usage: 52.1 MB, less than 45.59% of JavaScript online submissions for Count Primes.
export default (n) => {
  const excludes = new Array(n).fill(false);

  if (n < 3) return 0;

  // 最大的素数,因为偶数都不是质数
  let maxCount = Math.floor(n / 2);

  // 如果奇数相乘大于n，所以肯定不存在
  for (let i = 3; i * i < n; i += 2) {
    //说明已经排除了
    if (excludes[i]) {
      continue;
    }
    // 比如3，那么9，15，21肯定不是质数
    for (let j = i * i; j < n; j += i * 2) {
      if (!excludes[j]) {
        excludes[j] = true;
        maxCount--;
      }
    }
  }
  return maxCount;
};
