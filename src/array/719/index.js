/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const swap = (a, b) => {
  const tmp = b;
  b = a;
  a = tmp;
};
export default (nums, k) => {
  let results = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let _tmp = Math.abs(nums[j] - nums[i]);
      if (results.length === k) {
        results.sort((a, b) => a - b);
        for (let i = k - 1; i >= 0; i--) {
          if (results[i] > _tmp) {
            results[i] = _tmp;
            break;
          }
        }
      } else {
        results.push(_tmp);
      }
    }
  }
  results.sort((a, b) => a - b);
  return results[k - 1];
};
