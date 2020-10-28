/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
export default (nums, k) => {
  let arr = [];
  if (nums.length >= k) {
    for (let i = 0; i < nums.length - k + 1; i++) {
      let max = nums[i];
      for (let j = 1; j < k; j++) {
        max = Math.max(max, nums[i + j]);
      }
      arr.push(max);
    }
  } else {
    let max1 = arr[0];
    for (let i = 1; i < nums.lenght; i++) {
      max1 = Math.max(max1, nums[i]);
    }
    arr.push(max1);
  }
  console.log(arr);
  return arr;
};
