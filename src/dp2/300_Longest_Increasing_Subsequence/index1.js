/**
 * @param {number[]} nums
 * @return {number}
 */
//  [10,9,2,5,3,7,101,18]
//  4

const binarySearchPosition = (dp, target, high) => {
  let low = 0;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (target === dp[mid]) return mid;
    else if (target < dp[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
};
// [10, 9, 2, 5, 3, 7, 101, 18];
// Runtime: 84 ms, faster than 90.03% of JavaScript online submissions for Longest Increasing Subsequence.
// Memory Usage: 40.2 MB, less than 19.47% of JavaScript online submissions for Longest Increasing Subsequence.
export default (nums) => {
  const len = nums.length;
  if (!nums || len === 0) return 0;
  if (len === 1) return 1;
  let dp = new Array(len).fill(Number.MAX_VALUE);
  for (let i = 0; i < len; i++) {
    let pos = binarySearchPosition(dp, nums[i], i);
    dp[pos] = nums[i];
    console.log(dp);
  }

  for (let i = dp.length - 1; i >= 0; i--) {
    if (dp[i] !== Number.MAX_VALUE) return i + 1;
  }

  return 0;
};
