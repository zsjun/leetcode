/**
 * @param {number[]} nums
 * @return {number[]}
 */

// export default (nums) => {
//   const res = [];
//   for (let i = 0; i < nums.length; i++) {
//     let sum = 1;
//     for (let j = 0; j < nums.length; j++) {
//       if (j !== i) {
//         sum *= nums[j];
//       }
//     }
//     res[i] = sum;
//   }
//   return res;
// };

// Numbers:     2    3    4     5
// Lefts:            2  2*3 2*3*4
// Rights:  3*4*5  4*5    5

// Let’s fill the empty with 1:

// Numbers:     2    3    4     5
// Lefts:       1    2  2*3 2*3*4
// Rights:  3*4*5  4*5    5     1

export default (nums) => {
  const res = [];
  res[0] = 1;
  let sum = 1;
  const n = nums.length;
  // 计算left的值，这里可以得到每个i数字的Lefts的值
  for (let i = 1; i < n; i++) {
    res[i] = res[i - 1] * nums[i - 1];
  }
  // 为了保持空间复杂度为O（1），使用Rights保持右侧的数值
  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= right;
    right *= nums[i];
  }
  return res;
};
