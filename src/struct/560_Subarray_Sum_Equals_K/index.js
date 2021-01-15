/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

export default (nums, k) => {
  const copyNums = [0];
  for (let i = 0; i < nums.length; i++) {
    copyNums[i + 1] = copyNums[i] + nums[i];
  }

  let res = 0;
  for (let i = nums.length; i >= 1; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (copyNums[i] - copyNums[j] === k) {
        res++;
      }
      // if (copyNums[i] - copyNums[j] > k && nums[j - 1] > 0) {
      //   break;
      // }
    }
  }
  return res;
};
