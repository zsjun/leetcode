/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
export default (nums, k) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  let res = [];
  for (let [key, value] of map.entries()) {
    res.push({
      key,
      value,
    });
  }
  res.sort((a, b) => b.value - a.value);
  return res.map((item) => item.key).slice(0, k);
};
