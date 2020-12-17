### 494. 目标和

#### 题目描述

给定一个非负整数数组，a1, a2, ..., an, 和一个目标数，S。现在你有两个符号 + 和 -。对于数组中的任意一个整数，你都可以从 + 或 -中选择一个符号添加在前面。
<br/>
返回可以使最终数组和为目标数 S 的所有添加符号的方法数。<br/>



例子1<br/>

Input:  nums: [1, 1, 1, 1, 1], S: 3<br/>

output: 5<br/>

解释：
-1+1+1+1+1 = 3<br/>
+1-1+1+1+1 = 3<br/>
+1+1-1+1+1 = 3<br/>
+1+1+1-1+1 = 3<br/>
+1+1+1+1-1 = 3<br/>

一共有5种方法让最终目标和为3。
<br/>
提示<br/>

    数组非空，且长度不会超过 20 。
    初始的数组的和不会超过 1000 。
    保证返回的最终结果能被 32 位整数存下。


#### 思考

1 这里也是典型的0和1背包问题变形，也就是要么选择+nums[i]或者选择-nums[i]<br/>

状态转移方程也好解决<br/>

```
if (j + nums[i - 1] < maxN) {
    dp[i][j] += dp[i - 1][j + nums[i - 1]];
}
// 选择+nums[i - 1]
if (j - nums[i - 1] >= 0) {
    dp[i][j] += dp[i - 1][j - nums[i - 1]];
}
```

这里的难点是如何处理负数的情况？<br/>

如果没想清楚，可以看下代码，其实就是定义所有数据的和的两倍大小，这样就保证了-sum到sum都能包含进去<br/>

另外就是如何表示负数，刚开始的时候，我是想是否小于sum，来确定不同的状态转移方程，因为当是负数的情况下，状态转移方程是不一样的<br/>

比如nums: [1, 1, 1, 1, 1], S: 3
当求dp[2][5] = dp[1][4]+dp[1][6],但是实际上是不正确的，因为j<=sum的时候实际上表示的是负数<br/>

后来看了题解，原来是把当j=sum的时候表示0，j等于sum+1的时候表示正数1，当j等于sum-1的时候表示-1，这样就特别容易处理了<br/>

这里可以学习到表示从-sum到sum如何使用数组表示的方法<br/>

可以参考实现1<br/>
空间优化，参考实现2<br/>


#### 实现1
```js
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */

// Runtime: 176 ms, faster than 76.29% of JavaScript online submissions for Target Sum.
// Memory Usage: 44.4 MB, less than 52.32% of JavaScript online submissions for Target Sum.
export default (nums, S) => {
  let sum = 0;
  for (let i of nums) {
    sum += i;
  }

  // 如果大于最大的和小于最小的
  if (S > sum || S < -sum) {
    return 0;
  }
  const dp = [];
  const len = nums.length;
  const maxN = 2 * sum + 1;
  for (let i = 0; i <= len; i++) {
    dp[i] = new Array(maxN).fill(0);
  }
  // 这里指全部选择负数的时候，只有一种选择
  dp[0][0 + sum] = 1;
  for (let i = 1; i <= nums.length; i++) {
    for (let j = 0; j < maxN; j++) {
      // 选择-nums[i - 1]
      if (j + nums[i - 1] < maxN) {
        dp[i][j] += dp[i - 1][j + nums[i - 1]];
      }
      // 选择+nums[i - 1]
      if (j - nums[i - 1] >= 0) {
        dp[i][j] += dp[i - 1][j - nums[i - 1]];
      }
    }
  }
  // console.log(dp);
  return dp[nums.length][sum + S];
};


```
时间复杂度O（n * m），  空间复杂度O（n * m）

#### 实现2

```js
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */

// Runtime: 96 ms, faster than 96.39% of JavaScript online submissions for Target Sum.
// Memory Usage: 44.7 MB, less than 41.49% of JavaScript online submissions for Target Sum.
export default (nums, S) => {
  let sum = 0;
  for (let i of nums) {
    sum += i;
  }

  //
  if (S > sum || S < -sum) {
    return 0;
  }
  const len = 2 * sum + 1;
  let dp = new Array(len).fill(0);
  // 所有都选择负数
  dp[sum] = 1;

  for (let i = 0; i < nums.length; i++) {
    const next = new Array(len).fill(0);
    for (let k = 0; k < len; k++) {
      if (dp[k] != 0) {
        // 如果k有n中选择，那么当选择+ nums[i]的时候，肯定有n种，当选择- nums[i]的时候，肯定也有n种
        next[k + nums[i]] += dp[k];
        next[k - nums[i]] += dp[k];
      }
    }
    dp = next;
  }
  return dp[sum + S];
};

```

时间复杂度O（n * m），  空间复杂度O（n ）
