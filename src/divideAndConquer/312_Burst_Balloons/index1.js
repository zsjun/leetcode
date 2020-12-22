/**
 * @param {number[]} nums
 * @return {number}
 */
const get = (nums, i) => {
  if (i === -1 || i === nums.length) {
    return 1;
  }
  return nums[i];
};
const burst = (memo, nums, start, end) => {
  if (start > end) {
    return 0;
  }
  if (memo[start][end] > 0) {
    return memo[start][end];
  }
  let max = nums[start];
  for (let i = start; i <= end; i++) {
    let val =
      burst(memo, nums, start, i - 1) +
      get(nums, i) * get(nums, start - 1) * get(nums, end + 1) +
      burst(memo, nums, i + 1, end);

    max = Math.max(max, val);
  }
  memo[start][end] = max;
  return max;
};
export default (nums) => {
  const len = nums.length;
  const memo = [];
  for (let i = 0; i < len; i++) {
    memo[i] = new Array(len).fill(0);
  }
  // console.log(memo);
  return burst(memo, nums, 0, len - 1);
};
