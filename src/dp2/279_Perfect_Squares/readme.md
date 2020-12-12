### 279. 完全平方数

#### 题目描述

给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。<br/>


例子1<br/>

Input:  n = 12<br/>

output: 3<br/>

解释：12 = 4 + 4 + 4.
<br/>

例子2<br/>

Input:  n = 13 <br/>

output: 2<br/>
解释：13 = 4 + 9.




#### 思考

1 动态规划最重要的是什么？<br/>

一般主要是找到状态转移方程，这里的状态转移其实也很简单<br/>

这里我是怎么想出来的呢？<br/>

观察测试用例<br/>
// Input:  n = 12<br/>
// output: 3<br/>

// 解释：12 = 4 + 4 + 4.<br/>
// <br/>

// 例子2<br/>
// Input:  n = 13 <br/>
// output: 2<br/>
// 解释：13 = 4 + 9.<br/>

可以看到dp[13]是dp[4] + 3 * 3,dp[12] 是dp[8] + 2 * 2,而dp[8] = dp[4] + 2 * 2<br/>

所以这里的状态转移方程就是dp[n] = Math.min(dp[n-i]+1),并且n = n- i* i + 1<br/>

可以参考下实现1<br/>
#### 实现1
```js
/**
 * @param {number} n
 * @return {number}
 */

// Input:  n = 12<br/>
// output: 3<br/>

// 解释：12 = 4 + 4 + 4.
// <br/>

// 例子2<br/>
// Input:  n = 13 <br/>
// output: 2<br/>
// 解释：13 = 4 + 9.

// dp[13] = dp[]

// dp[1] = 1
// dp[2] = 1+1
// dp[n] = dp[n-]
export default (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;
  const dp = [];
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = Number.MAX_VALUE;
    const sqrtN = Math.floor(Math.sqrt(i));
    for (let j = 1; j <= sqrtN; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
  return dp[n];
};


```
时间复杂度O（1到n的根号的和），  空间复杂度O（n）