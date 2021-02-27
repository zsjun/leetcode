/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
//  Runtime: 616 ms, faster than 8.61% of JavaScript online submissions for 4Sum.
//  Memory Usage: 40.5 MB, less than 73.01% of JavaScript online submissions for 4Sum.
export default (nums, target) => {
  if (nums.length < 4) return [];
  const res = [];
  const map = new Set();
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      for (let k = j + 1; k < nums.length - 1; k++) {
        for (let m = k + 1; m < nums.length; m++) {
          if (nums[i] + nums[j] + nums[k] + nums[m] === target) {
            if (!map.has(`${nums[i]}${nums[j]}${nums[k]}${nums[m]}`)) {
              res.push([nums[i], nums[j], nums[k], nums[m]]);
              map.add(`${nums[i]}${nums[j]}${nums[k]}${nums[m]}`);
            }
          }
        }
      }
    }
  }
  return res;
};
