### 198. 打家劫舍II

#### 题目描述

你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。<br/>

给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，能够偷窃到的最高金额。

<br/>

例子1<br/>

Input: nums = [2,3,2]<br/>

output: 3<br/>

解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
<br/>

例子2<br/>

Input: nums = [1,2,3,1]<br/>

output: 4<br/>

解释： 你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
     偷窃到的最高金额 = 1 + 3 = 4 。
<br/>


例子3<br/>

Input: nums = [0]<br/>

output: 0<br/>
<br/>
提示：

1 0 <= nums.length <= 100 <br/>
2 0 <= nums[i] <= 1000 <br/>


#### 思考

这里基本上延续上面的打家劫舍的题目，但是和上面不一样的是这里是一个循环，从末尾又连到了开始，所以这里该如何解决呢？<br/>

如果想要解决一个问题，首先就要明白问题是什么？如果把问题定义的很清楚，也就离解决问题不远了<br/>

那这里和打家劫舍有哪些不同呢？<br/>

如果想不到，可以写个测试用例，自己看看，比如房屋的金额分别是[2,3,2],我们会得到什么结果呢？<br/>

走到这里，相信基本上已经明白了问题在哪了，我们如果按照打家劫舍的解法去做，可以发现因为我们不确定从第一家还是第二家开始打劫，所以如果我们从第一家开始打劫的话，打劫到最后一家的时候，因为最后一家和第一家相连，所以就触发了报警<br/>

所以问题也就清楚了，我们如何确定当打劫到到最后一家的时候，如何确定我们没有打劫第一家呢？<br/>

应该很容易想到我们如果从第二家开始打劫，一直到最后一家，肯定不会触发报警。<br/>

但是从第二家开始是不是就是结果呢？<br/>

我们能不能也从第一家开始打劫呢?如果从第一家开始打劫，我们是不是打劫到倒数第二家就可以了？<br/>

可以发现这两种情况的最大的，就是我们可以打劫到的最大金额。




#### 实现1
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
// Runtime: 68 ms, faster than 98.02% of JavaScript online submissions for House Robber II.
// Memory Usage: 38.5 MB, less than 53.03% of JavaScript online submissions for House Robber II.
export default (nums) => {
  if (!nums) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  let preN2money = nums[0];
  let preN1money = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length - 1; i++) {
    const temp = preN1money;
    preN1money = Math.max(preN1money, preN2money + nums[i]);
    preN2money = temp;
  }
  let preN2money2 = nums[1];
  let preN1money1 = Math.max(nums[1], nums[2]);
  for (let i = 3; i < nums.length; i++) {
    const temp = preN1money1;
    preN1money1 = Math.max(preN1money1, preN2money2 + nums[i]);
    preN2money2 = temp;
  }
  return Math.max(preN1money1, preN1money);
};

```
时间复杂度O（n），  空间复杂度O（1）