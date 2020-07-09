/**
 * @param {number[]} nums
 * @return {number}
 */
export default (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] === nums[i]) {
        count++;
      }
      if (count >= 2) {
        return nums[i];
      }
    }
  }
};
