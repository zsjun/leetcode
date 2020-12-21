/**
 * @param {number} N
 * @return {number[]}
 */
// Runtime: 156 ms, faster than 6.25% of JavaScript online submissions for Beautiful Array.
// Memory Usage: 57.3 MB, less than 6.25% of JavaScript online submissions for Beautiful Array.
export default (N) => {
  if (N === 1) return [1];
  const dp = [];
  dp[1] = [1];
  dp[2] = [1, 2];

  for (let i = 3; i <= N; i++) {
    const left = Math.floor(i / 2);
    const leftArr = dp[left].map((x) => x * 2);
    const right = i - left;
    const rightArr = dp[right].map((x) => x * 2 - 1);
    dp[i] = [...leftArr, ...rightArr];
  }
  return dp[N];
};
