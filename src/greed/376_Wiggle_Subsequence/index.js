/**
 * @param {number[]} nums
 * @return {number}
 */
export default (nums) => {
  if (nums.length === 0) return 0;
  if (nums.length === 1 || nums.length === 2) return 1;

  let res = 1;
  for (let i = 0; i < nums.length; ) {
    let j = i + 1;
    if (nums[j] > nums[i]) {
      res++;
      while (nums[j + 1] >= nums[j]) {
        j++;
      }
      i = j;
    } else if (nums[j] < nums[i]) {
      res++;
      while (nums[j + 1] <= nums[j]) {
        j++;
      }
      i = j;
    } else {
      i++;
    }
  }
  return res;
};
