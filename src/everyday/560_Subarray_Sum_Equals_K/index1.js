/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  if (nums.length === 1 && nums[0] !== k) return 0;
  const map = new Map();
  map.set(0, 1);
  let res = 0;
  let copyNums = 0;
  for (let i = 0; i < nums.length; i++) {
    copyNums = copyNums + nums[i];
    if (map.has(copyNums - k)) {
      res += map.get(copyNums - k);
    }
    if (map.has(copyNums)) {
      const count = map.get(copyNums) + 1;
      map.set(copyNums, count);
    } else {
      map.set(copyNums, 1);
    }
  }
  return res;
};
