/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const backTrack = (nums, index, k, loopRes, res) => {
  if (loopRes.length === k) {
    res.push(loopRes);
    return;
  }
  for (let i = index; i < nums.length; i++) {
    loopRes.push(nums[i]);
    backTrack(nums, i + 1, k, [...loopRes], res);
    loopRes.pop(nums[i]);
  }
};
export default (n, k) => {
  const res = [];
  const loopRes = [];
  const nums = [];
  for (let i = 1; i <= n; i++) {
    nums.push(i);
  }
  backTrack(nums, 0, k, [], res);
  return res;
};
