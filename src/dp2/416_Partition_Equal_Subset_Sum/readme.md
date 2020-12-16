### 416. 分割等和子集

#### 题目描述

给定一个只包含正整数的非空数组。是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。<br/>

注意：<br/>

1. 每个数组中的元素不会超过 100<br/><br/>
2. 数组的大小不会超过 200<br/>


例子1<br/>

Input:  [1, 5, 11, 5]<br/>

output: true<br/>

解释： 数组可以分割成 [1, 5, 5] 和 [11].<br/>
<br/>

例子2<br/>

Input: [1, 2, 3, 5]<br/>

output: false<br/>

解释： 数组不能分割成两个元素和相等的子集.<br/>

#### 思考

1 这里要转换成0和1背包问题，其实还是有些难度，如何想到如何转换成0和1背包就按照0和1背包问题解决就可以了<br/>

主要是问题是一共有nums.length个数字，每个数字就涉及到选择或者不选择，这些可以当做0和1背包的物品<br/>

那么什么当做0和1背包的体积呢？<br/>

这是比较关键的，想下什么可以当做0和1背包的体积<br/>

这里一个比较重要的转换是就是所有数字的和的一半可以当做背包的体积。<br/>

我们选择任何数字，只要和等于所有数字的和的一半就可以了<br/>


这样就转换成了0和1背包的问题了<br/>

没有优化空间的，可以看下实现1<br/>

优化空间的，可以看下实现2<br/>


#### 实现1
```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// [1,5,11,5]
// 155 11
// 1235

// [1, 2, 3, 5];
// [1, 1, 2, 2];
// Runtime: 244 ms, faster than 45.49% of JavaScript online submissions for Partition Equal Subset Sum.
// Memory Usage: 70.8 MB, less than 31.03% of JavaScript online submissions for Partition Equal Subset Sum.
export default (nums) => {
  const len = nums.length;
  const sum = nums.reduce((a, b) => a + b);
  if (sum % 2 !== 0) return false;
  const target = sum / 2;
  const dp = new Array(len);
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(target + 1).fill(false);
  }
  for (let i = 0; i < len; ++i) {
    dp[i][0] = true;
  }
  for (let i = 1; i < len; i++) {
    for (let j = 0; j <= target; ++j) {
      if (j >= nums[i - 1]) {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
      if (j === target && dp[i][j]) {
        return true;
      }
    }
  }
  // console.log(dp);
  return dp[len - 1][target];
};


```
时间复杂度O（n^2），  空间复杂度O（n^2）

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// [1,5,11,5]
// 155 11
// 1235

// [1, 2, 3, 5];
// [1, 1, 2, 2];
// Runtime: 108 ms, faster than 91.72% of JavaScript online submissions for Partition Equal Subset Sum.
// Memory Usage: 40.9 MB, less than 75.58% of JavaScript online submissions for Partition Equal Subset Sum.
export default (nums) => {
  const len = nums.length;
  const sum = nums.reduce((a, b) => a + b);
  if (sum % 2 !== 0) return false;
  const target = sum / 2;
  const dp = new Array(target + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i < len; i++) {
    for (let j = target; j >= 0; j--) {
      if (j >= nums[i - 1]) {
        dp[j] = dp[j] || dp[j - nums[i - 1]];
      } else {
        dp[j] = dp[j];
      }
      if (j === target && dp[j]) {
        return true;
      }
    }
  }
  // console.log(dp);
  return dp[target];
};

```

时间复杂度O（n^2），  空间复杂度O（n^2）