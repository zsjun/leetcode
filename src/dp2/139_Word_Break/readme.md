### 139. 单词拆分

#### 题目描述

给定一个非空字符串 s 和一个包含非空单词的列表 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。
<br/>

说明:<br/>


1 拆分时可以重复使用字典中的单词。<br/>
2 你可以假设字典中没有重复的单词。<br/>



例子1<br/>

Input:  s = "leetcode", wordDict = ["leet", "code"]<br/>

output: true<br/>

解释：返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
<br/>


例子2<br/>

Input: s = "applepenapple", wordDict = ["apple", "pen"]<br/>

output: true<br/>

解释：返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
     注意你可以重复使用字典中的单词。
<br/>

例子3<br/>

Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]<br/>

output: false<br/>

<br/>




#### 思考

1 这里使用动态规划比较简单，很容易就可以想到dp[n]表示长度为n的字符串是否可以用wordDict表示，那么dp[n+1]呢？<br/>

这里应该比较简单,可以想下dp[n+1]什么时候为true，什么时候为false呢？<br/>

那肯定是如果发从s[n+1]到s[i]的字符串可以用wordDict表示，同时dp[i-1]也可以表示的时候，那么dp[n+1]肯定是true了。

#### 实现1
```js
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// Runtime: 88 ms, faster than 57.62% of JavaScript online submissions for Word Break.
// Memory Usage: 40.5 MB, less than 62.66% of JavaScript online submissions for Word Break.
export default (s, wordDict) => {
  // dp[i] 表示s中前i个字符是否可以在wordDict中表示
  const dp = new Array(s.length).fill(0);

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j >= 0; j--) {
      const subStr = s.substring(j, i + 1);
      if (wordDict.includes(subStr) && ((dp[j - 1] === 1 && j > 0) || j === 0)) {
        dp[i] = 1;
      }
    }
  }
  return dp[s.length - 1];
};


```
时间复杂度O（n * n * wordDict.length），<br/>
空间复杂度O（n）

