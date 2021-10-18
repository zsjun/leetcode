/**
 * @param {number} n
 * @return {number}
 */

// Runtime: 114 ms, faster than 56.67% of JavaScript online submissions for Count Vowels Permutation.
// Memory Usage: 39.1 MB, less than 100.00% of JavaScript online submissions for Count Vowels Permutation.
export default (n) => {
  if (n < 1) return 0;
  if (n === 1) return 5;
  if (n === 2) return 10;
  let cur = new Array(5).fill(1);
  let next = new Array(5);
  const mod = 1_000_000_007;
  // 其实很简单，cur 就是先建立一个长度为5的数组，分别表示以a，e,i,o,u结尾的数量，
  // next 就是根据上面的再计算出新的分别以a，e,i,o,u结尾的数量，
  for (let i = 1; i < n; ++i) {
    next[0] = (((cur[1] + cur[2]) % mod) + cur[4]) % mod;
    next[1] = (cur[0] + cur[2]) % mod;
    next[2] = (cur[1] + cur[3]) % mod;
    next[3] = cur[2];
    next[4] = (cur[3] + cur[2]) % mod;
    const tmp = cur;
    cur = next;
    next = tmp;
  }
  let res = 0;
  for (let c of cur) res = (res + c) % mod;
  return res;
};
