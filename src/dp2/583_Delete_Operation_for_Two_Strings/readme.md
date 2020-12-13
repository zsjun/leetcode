### 583. 两个字符串的删除操作

#### 题目描述

给定两个单词 word1 和 word2，找到使得 word1 和 word2 相同所需的最小步数，每步可以删除任意一个字符串中的一个字符。<br/>


例子1<br/>

Input:  "sea", "eat" <br/>

output: 2<br/>

解释：第一步将"sea"变为"ea"，第二步将"eat"变为"ea"
<br/>



提示：<br/>


1 给定单词的长度不超过500。<br/>
2 给定单词中的字符只含有小写字母。<br/>



#### 思考

1 这里是上面的1143的变种题目，可以想下两者有那些不同?
做题不是目的，举一反三才是本质<br/>

那么两者有哪些不一样呢？<br/>

我们可以从1143得到那些提示，如何修改才能解决本题呢？<br/>

从上面的1143可以得出我们同样可以定义dp[i][j],但是这里的状态转移方程是什么呢？<br/>

很容易想到，如果word1[i]等于word[j],那么dp[i][j] 就等于dp[i-1][j-1]<br/>

这里比较困难的是如何处理word1[i]不等于word[j]的时候，如何处理呢？<br/>

可以想下<br/>

这里可以提供一个思路，一般二维动态规划的状态转移方程，dp[i][j] 一般和dp[i-1][j],dp[i][j-1],
dp[i-1][j-1] 有关<br/>

然后应该可以得出
dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;<br/>

参考实现1<br/>


#### 实现1

```js
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

// "sea", "eat";

// Runtime: 108 ms, faster than 93.48% of JavaScript online submissions for Delete Operation for Two Strings.
// Memory Usage: 45 MB, less than 75.00% of JavaScript online submissions for Delete Operation for Two Strings.
export default (word1, word2) => {
  if (word1 === word2) {
    return 0;
  }
  if (word1.length === 0) {
    return word2.length;
  }
  if (word2.length === 0) {
    return word1.length;
  }
  const m = word1.length;
  const n = word2.length;
  const dp = [];
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(0);
  }
  for (let i = 1; i <= n; i++) {
    dp[0][i] = i;
  }
  for (let i = 1; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
      }
    }
  }
  // console.log(dp);
  return dp[m][n];
};

```
时间复杂度O（m * n), 空间复杂度O（m * n）
