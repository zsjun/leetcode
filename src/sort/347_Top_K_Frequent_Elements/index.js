/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

export default (nums, k) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      const count = +map.get(nums[i]) + 1;
      map.set(nums[i], count);
    }
  }
  let res = [];
  for (let [key, value] of map) {
    res.push({
      key,
      value,
    });
  }
  res.sort((a, b) => b.value - a.value);
  res = res.slice(0, k);
  return res.map((item) => +item.key);
};
