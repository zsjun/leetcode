/**
 * @param {number[]} nums
 * @return {number[]}
 */
export default (nums) => {
  if (!nums || nums.length === 0) return [];
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      res.push(nums[i]);
      nums.splice(i, 1);
      break;
    }
  }
  // [1, 5, 3, 2, 2, 7, 6, 4, 8, 9];
  let missVal = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== missVal) {
      res.push(missVal);
      break;
    } else {
      ++missVal;
    }
  }
  if (res.length !== 2) {
    res.push(missVal);
  }
  return res;
};
