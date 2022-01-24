/**
 * @param {number[]} nums
 * @return {number}
 */
[1, 3, 4, 2, 2];
var findDuplicate = function (nums) {
  if (nums === null || nums.length === 0) {
    return -1;
  }
  // 同一起点
  let slow = nums[0];
  let fast = nums[slow];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }
  slow = 0;
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
};
