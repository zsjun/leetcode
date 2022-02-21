/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = new Map();
  const halfLen = Math.floor(nums.length / 2);
  let max = 0;
  let res;
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
    if (map.get(nums[i]) >= halfLen && map.get(nums[i]) > max) {
      res = nums[i];
      max = map.get(nums[i]);
    }
  }
  return res;
};
