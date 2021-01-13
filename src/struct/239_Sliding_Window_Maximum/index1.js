// nums = [1, 3, -1, -3, 5, 3, 6, 7], and k = 3

// Monotonic queue  max
// [1]              -
// [3]              -
// [3, -1]          3
// [3, -1, -3]      3
// [5]              5
// [5, 3]           5
// [6]              6
// [7]              7
// Runtime: 724 ms, faster than 46.21% of JavaScript online submissions for Sliding Window Maximum.
// Memory Usage: 69.3 MB, less than 29.89% of JavaScript online submissions for Sliding Window Maximum.
export default (nums, k) => {
  const res = [];
  const q = [];

  for (let i = 0; i < nums.length; i++) {
    // 最大单调递减
    while (q.length - 1 >= 0 && nums[i] > q[q.length - 1]) {
      q.pop();
    }
    q.push(nums[i]);

    // 从下标i往前k个数
    const j = i + 1 - k;
    if (j >= 0) {
      res.push(q[0]);
      if (nums[j] === q[0]) {
        q.shift();
      }
    }
  }
  return res;
};
