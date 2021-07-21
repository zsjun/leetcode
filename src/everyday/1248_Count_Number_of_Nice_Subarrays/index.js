/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

export default (nums, k) => {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    let oddNum = 0;
    for (let j = i; j < nums.length; j++) {
      if (nums[j] % 2 !== 0) {
        if (oddNum === k) {
          break;
        }
        oddNum++;
        if (oddNum === k) {
          res++;
        }
      } else {
        if (oddNum === k) {
          res++;
        }
      }
    }
  }
  return res;
};
