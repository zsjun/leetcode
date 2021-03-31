/**
 * @param {number[][]} envelopes
 * @return {number}
 */
function firstGTE(arr, val) {
  let l = 0,
    r = arr.length - 1,
    ans = -1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] >= val) {
      ans = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return ans;
}
// [
//   [5, 4],
//   [6, 4],
//   [6, 7],
//   [2, 3],
// ];
// Runtime: 88 ms, faster than 97.28% of JavaScript online submissions for Russian Doll Envelopes.
// Memory Usage: 41.4 MB, less than 50.34% of JavaScript online submissions for Russian Doll Envelopes.
export default (envelopes) => {
  if (envelopes.length === 0) return 0;
  envelopes.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      // 这里特别重要，这里就可以转换为单调栈的类似处理方法来处理
      return b[1] - a[1];
    }
  });
  const dp = [];
  for (let i = 0; i < envelopes.length; i++) {
    let index = firstGTE(dp, envelopes[i][1]);
    if (index == -1) {
      dp.push(envelopes[i][1]);
    } else if (index != -1) {
      dp[index] = envelopes[i][1];
    }
  }

  return dp.length;
};
