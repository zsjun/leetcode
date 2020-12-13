### 1143. 最长公共子序列

#### 题目描述

给定两个字符串 text1 和 text2，返回这两个字符串的最长公共子序列的长度。<br/>

一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。<br/>
例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。两个字符串的「公共子序列」是这两个字符串所共同拥有的子序列。<br/>

若这两个字符串没有公共子序列，则返回 0。<br/>

例子1<br/>

Input:  text1 = "abcde", text2 = "ace" <br/>

output: 3<br/>

解释：最长公共子序列是 "ace"，它的长度为 3。
<br/>

例子2<br/>

Input: text1 = "abc", text2 = "abc"<br/>

output: 3<br/>

解释：最长公共子序列是 "abc"，它的长度为 3。
<br/>


例子3<br/>

Input: text1 = "abc", text2 = "def"<br/>

output: 0<br/>

解释：两个字符串没有公共子序列，返回 0。
<br/>

提示：<br/>


1 1 <= text1.length <= 1000<br/>
2 1 <= text2.length <= 1000<br/>
3 输入的字符串只含有小写英文字符。<br/>



#### 思考

1 这里是求公共子序列，动态规划中一般dp[i]是指i结尾的子序列<br/>

因为这里涉及到两个字符串，很容易想到使用二维动态规划
dp[i][j]<br/>

dp[i][j] 可以用来表示第一个字符串中i结尾和第二个字符串j结尾的包含的公共子序列<br/>


那么状态转移方程是什么呢？<br/>

可以看下测试用例text1 = "abcde", text2 = "ace"<br/>
可以看到dp[1][1] = 1，因为"a"等于“a”，那么接下来问题就来了？<br/>

dp[i+1][j] 是什么？<br/>
dp[i][j+1]是什么？<br/>
dp[i][j]是什么？<br/>

可以看到dp[2][1]=1,dp[1][2] =1 ,dp[2][2] = 1<br/>

那么有什么关系呢？<br/>

可以看到如果dp[i+1]等于dp[j+1],那么 dp[i+1][j+1]=dp[i][j]+1,如果dp[i+1]不等于dp[j+1]，那么dp[i+1][j+1]要么等于dp[i+1][j]要么等于dp[i][j+1]，也就是dp[i+1][j+1]=Math.max(dp[i+1][j],dp[i][j+1])<br/>


有了状态转移方程，代码就很容易了<br/>

参考实现1<br/>


#### 实现1

```js
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

//  Runtime: 116 ms, faster than 62.14% of JavaScript online submissions for Longest Common Subsequence.
//  Memory Usage: 48.4 MB, less than 91.40% of JavaScript online submissions for Longest Common Subsequence.
// export default (text1, text2) => {
  const m = text1.length;
  const n = text2.length;
  const dp = [];
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(0);
  }
  // console.log(dp);
  for (let i = 1; i <= m; ++i) {
    for (let j = 1; j <= n; ++j) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  // console.log(dp);
  return dp[m][n];
};

```
时间复杂度O（m * n), 空间复杂度O（m * n）