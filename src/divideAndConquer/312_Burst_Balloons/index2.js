// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const get = (nums, i) => {
//   if (i === 0 || i === nums.length + 1) {
//     return 1;
//   }
//   return nums[i - 1];
// };
// export default (nums) => {
//   const len = nums.length;
//   const dp = [];
//   // dp[i][j] 表示i+1到j-1的最大值
//   for (let i = 0; i < len + 2; i++) {
//     dp[i] = new Array(len + 2).fill(0);
//   }
//   // console.log(dp, nums);
//   for (let i = 0; i <= len + 1; i++) {
//     for (let j = len + 1; j > i; j--) {
//       for (let k = i + 1; k < j; k++) {
//         dp[i][j] = Math.max(dp[i][j], get(nums, i) * get(nums, k) * get(nums, j) + dp[i][k] + dp[k][j]);
//       }
//     }
//   }
//   console.log(dp);
//   return dp[0][len + 1];
// };
