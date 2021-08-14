/**
 * @param {number[]} nums
 * @return {number}
 */
// [2,5,9]
// Runtime: 212 ms, faster than 100.00% of JavaScript online submissions for Sum of Floored Pairs.
// Memory Usage: 51.6 MB, less than 50.00% of JavaScript online submissions for Sum of Floored Pairs.
// 1 <= nums[i] <= 10^5
export default (nums) => {
  const MODULUS = 1000000007;
  // const MAX = 100000;
  let MAX = 0;
  for (let i = 0; i < nums.length; i++) {
    MAX = Math.max(MAX, nums[i]);
  }
  const counts = new Array(MAX + 1).fill(0);

  for (let num of nums) {
    // 表示counts[i] 表示i有多少个数
    ++counts[num];
  }

  for (let i = 1; i <= MAX; ++i) {
    // 升级成前缀和，表示小于等于i的有多少个数
    counts[i] += counts[i - 1];
  }

  let total = 0;
  // 当floor(x/y) y等于i的时候，有多少个x
  for (let i = 1; i <= MAX; ++i) {
    // 在这个范围存在i
    if (counts[i] > counts[i - 1]) {
      let sum = 0;
      // 在floor（x/y）等于j的时候，有多少个x
      for (let j = 1; i * j <= MAX; ++j) {
        // 在j范围的数字
        const lower = i * j - 1;
        const upper = i * (j + 1) - 1;
        let maxCount = counts[Math.min(upper, MAX)]
          ? counts[Math.min(upper, MAX)]
          : 0;
        // counts[Math.min(upper, MAX)] - counts[lower]
        // 和的值
        sum += (maxCount - counts[lower]) * j;
      }
      //
      total = (total + (sum % MODULUS) * (counts[i] - counts[i - 1])) % MODULUS;
    }
  }
  return total;
};
