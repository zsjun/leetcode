/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
//  Runtime: 96 ms, faster than 93.38% of JavaScript online submissions for 4Sum.
//  Memory Usage: 40.7 MB, less than 61.59% of JavaScript online submissions for 4Sum.
export default (nums, target) => {
  const res = [];
  nums.sort((a, b) => a - b);
  kSum(res, [], nums, 0, target, 4);
  return res;
};
// res 结果，tuple ， nums是输入的数组，start是开始，target是目标，k是寻找几个数
function kSum(result, tuple, nums, start, target, k) {
  // 如果nums为空，或者不够长度，或者最小的都超过了target，或者最大的都小于target
  if (
    !nums ||
    nums.length === 0 ||
    start + k > nums.length ||
    nums[start] * k > target ||
    nums[nums.length - 1] * k < target
  )
    return;

  // Base case is 2sum.
  if (k === 2) {
    let l = start,
      r = nums.length - 1;
    while (l < r) {
      let sum = nums[l] + nums[r];
      if (sum < target) {
        l++;
      } else if (sum > target) {
        r--;
      } else {
        // assert (sum == target);
        const temp = [...tuple];
        // List<Integer> temp = new ArrayList<>(tuple);
        temp.push(nums[l]);
        temp.push(nums[r]);
        result.push(temp);
        l++;
        // 跳过相同的
        while (l < r && nums[l - 1] === nums[l]) {
          l++;
        }
      }
    }
  } else {
    for (let i = start; i < nums.length; ++i) {
      // 跳过重复的
      if (i > start && nums[i - 1] === nums[i]) {
        continue;
      }
      tuple.push(nums[i]);
      kSum(result, tuple, nums, i + 1, target - nums[i], k - 1);
      tuple.pop();
    }
  }
}
