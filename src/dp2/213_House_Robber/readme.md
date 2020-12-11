### 198. 打家劫舍

#### 题目描述

你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
<br/>

例子1<br/>

Input: [1,2,3,1]<br/>

output: 4<br/>

解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。
<br/>

例子2<br/>

Input: [2,7,9,3,1]<br/>

output: 12<br/>

解释： 偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12
<br/>

提示：

1 0 <= nums.length <= 100 <br/>
2 0 <= nums[i] <= 400 <br/>


#### 思考

这基本上是最经典的动态规划题目，动态规划的关键是确立动态转移方程<br/>

动态规划一般是利用已知的前面保存的状态推出下面的状态<br/>

假设dp[n]是数组长度为n的房屋可以盗窃的最大金额，那么现在可以思考下当dp[n+1]的时候，可以盗窃的最大金额是什么呢？<br/>

可以很容易的想到dp[n+1]要么不盗窃n+1的房屋的金额，那么肯定是等于dp[n],要么盗窃n+1房屋的金额，那么当盗窃n+1房屋金额的时候，总盗窃金额是dp[n+1] = dp[n-2]+(n+1)房屋的金额<br/>


#### 实现1
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
// Runtime: 68 ms, faster than 97.89% of JavaScript online submissions for House Robber.
// Memory Usage: 38.2 MB, less than 91.14% of JavaScript online submissions for House Robber.
export default (nums) => {
  if (!nums) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  let preN2money = nums[0];
  let preN1money = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    const temp = preN1money;
    preN1money = Math.max(preN1money, preN2money + nums[i]);
    preN2money = temp;
  }
  return preN1money;
};

```
时间复杂度O（n），  空间复杂度O（1）