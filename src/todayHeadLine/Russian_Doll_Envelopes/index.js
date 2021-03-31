/**
 * @param {number[][]} envelopes
 * @return {number}
 */
export default (envelopes) => {
  if (envelopes.length === 0) return 0;
  envelopes.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });
  const dp = new Array(envelopes.length).fill(1);
  let max = 1;
  for (let i = 1; i < envelopes.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (envelopes[j][1] < envelopes[i][1] && envelopes[j][0] < envelopes[i][0]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    max = Math.max(dp[i], max);
  }

  return max;
};
