/**
 * @param {number[]} nums
 * @return {boolean}
 */
export default (nums) => {
  if (!nums || nums.length < 3) return false;
  // for (let i = 0; i < nums.length - 2; i++) {
  //   for (let j = i + 1; j < nums.length - 1; j++) {
  //     for (let k = j + 1; k < nums.length; k++) {
  //       if (nums[i] < nums[j] && nums[j] < nums[k]) {
  //         return true;
  //       }
  //     }
  //   }
  // }

  // start with two largest values, as soon as we find a number bigger than both, while both have been updated, return true.
  let small = Number.MAX_VALUE,
    big = Number.MAX_VALUE;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= small) {
      small = nums[i];
    } // update small if n is smaller than both
    else if (nums[i] <= big) {
      big = nums[i];
    } // update big only if greater than small but smaller than big
    else return true; // return if you find a number bigger than both
  }
  return false;
};
