/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// Runtime: 1996 ms, faster than 22.94% of JavaScript online submissions for Sliding Window Maximum.
// Memory Usage: 69 MB, less than 38.21% of JavaScript online submissions for Sliding Window Maximum.
export default (nums, k) => {
  const res = [];
  let max = nums[0];
  let begin = 0;
  for (let i = 1; i < k; i++) {
    if (nums[i] > max) {
      begin = i;
      max = nums[begin];
    }
  }
  res.push(max);
  for (let i = k; i < nums.length; i++) {
    if (i - begin + 1 <= k && nums[i] < nums[begin]) {
      res.push(max);
    } else {
      max = nums[begin + 1];
      begin = begin + 1;
      for (let m = begin + 1; m <= i; m++) {
        if (nums[m] > max) {
          max = nums[m];
          begin = m;
        }
      }
      res.push(max);
    }
  }
  return res;
};
