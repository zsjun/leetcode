/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// [2, 0, 2, 1, 1, 0][(2, 0, 2, 1, 1, 0)];
export default (nums) => {
  const res = new Array(3).fill(0);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      res[0]++;
    } else if (nums[i] === 1) {
      res[1]++;
    } else {
      res[2]++;
    }
  }
  // console.log(res);
  for (let i = 0; i < res[0]; i++) {
    nums[i] = 0;
  }
  for (let i = 0; i < res[1]; i++) {
    nums[res[0] + i] = 1;
  }
  for (let i = 0; i < res[2]; i++) {
    nums[res[0] + i + res[1]] = 2;
  }
};
