### 91. 解码方法

#### 题目描述

一条包含字母 A-Z 的消息通过以下方式进行了编码：<br/>

'A' -> 1<br/>
'B' -> 2<br/>
...<br/>
'Z' -> 26<br/>

给定一个只包含数字的非空字符串，请计算解码方法的总数。

题目数据保证答案肯定是一个 32 位的整数。<br/>

<br/>


例子1<br/>

Input:  s = "12"<br/>

output: 2<br/>

解释：它可以解码为 "AB"（1 2）或者 "L"（12）
<br/>


例子2<br/>

Input: s = "226"<br/>

output: 3<br/>

解释：它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。
<br/>

例子3<br/>

Input: s = "0"<br/>

output: 0<br/>

<br/>

例子4<br/>

Input: s = "1"<br/>

output: 1<br/>

例子5<br/>

Input: s = "2"<br/>

output: 1<br/>




#### 思考

1 刚开始思考，通过"226" 这个测试用例，很容易的可以得出状态转移方程是dp[n] = dp[n-1] + dp[n-2] 或者dp[n] = dp[n-1]<br/>

本题的难度不在于状态转移方程的思考，而是在于各种不同情况的处理<br/>

比如这里你可以思考下以下测试用例如何处理<br/>
“12” => 2<br/>
“226” => 3<br/>
“00” => 0<br/>
“2101” => 1<br/>
"27" => 1<br/>
"1201234" => 3<br/>
"10011" => 0<br/>
"123123" => 9<br/>
"230" => 0<br/>

正常的思考路程肯定是处理各种情况，可以参考实现1<br/>

2 通过上面的情况，可以发现各种情况需要各种处理，代码虽然不是很复杂，但是需要处理的各种情况，都需要处理，代码显得冗余，而且不优雅，显得代码难看<br/>

可以把上面的各种情况进行统一处理下<br/>

这里我们需要思考下为什么上面的情况那么复杂，需要处理的情况为什么那么多？<br/>

可以发现就是“0”的各种情况，所以需要各种特殊处理<br/>

这里有两种情况<br/>

如果当前的数字不是0，那没什么说的，最基本的是dp[i] += dp[i-1]<br/>

然后就是要处理要不要再加上dp[i-2],换句话说就是最后两个数字是不是在1到26之间，如果在1到26之间，就需要加上dp[i-2],如果不在，则不需要<br/>

可以参考实现2，可以看到代码简洁了很多<br/>


#### 实现1
```js
/**
 * @param {string} s
 * @return {number}
 */
// dp[3] = dp[1]+dp[2]
// Runtime: 104 ms, faster than 22.88% of JavaScript online submissions for Decode Ways.
// Memory Usage: 42.5 MB, less than 15.00% of JavaScript online submissions for Decode Ways.
export default (s) => {
  if (s.length === 1 && +s > 0) {
    return 1;
  } else if (s.length === 1 || s[0] === "0") {
    return 0;
  }
  const dp = [];
  dp[0] = +s[0] > 0 ? 1 : 0;
  dp[1] = +s[1] > 0 ? dp[0] + 1 : dp[0];

  if (+s.substring(0, 2) > 26 && +s[0] > 0 && s[1] !== "0") {
    dp[1] = 1;
  } else if (+s.substring(0, 2) > 26 && +s[0] > 0 && s[1] === "0") {
    return 0;
  }

  for (let i = 2; i < s.length; i++) {
    if (s[i] === "0" && +s.substring(i - 1, i + 1) < 27 && +s.substring(i - 1, i + 1) > 9) {
      dp[i] = dp[i - 2];
    } else if (+s[i - 1] > 0 && +s[i] > 0 && +s.substring(i - 1, i + 1) > 10 && +s.substring(i - 1, i + 1) < 27) {
      dp[i] = dp[i - 1] + dp[i - 2];
    } else if ((+s[i - 1] === 0 && +s[i] > 0) || (+s[i - 1] > 0 && +s[i] > 0 && +s.substring(i - 1, i + 1) > 26)) {
      dp[i] = dp[i - 1];
    } else if ((+s[i] === 0 && +s.substring(i - 1, i + 1) > 26) || (+s[i - 1] === 0 && +s[i] === 0)) {
      return 0;
    }
  }
  // console.log(dp);
  return dp[dp.length - 1];
};


```
时间复杂度O（n），  空间复杂度O（n）


#### 实现2

```js
/**
 * @param {string} s
 * @return {number}
 */
export default (s) => {
  if (s.length === 0) return 0;

  const len = s.length;
  const dp = new Array(len + 1).fill(0);

  dp[0] = 1;
  // 当有一个字符的时候
  dp[1] = s[0] === "0" ? 0 : 1;

  for (let i = 2; i <= len; i++) {
    // 如果不等于0，肯定是等于dp[n-1]
    if (s[i - 1] !== "0") {
      dp[i] += dp[i - 1];
    }
    // console.log(dp[i], i);
    // 如果等于0或者小于6的情况下加上dp[n-2]
    if (s[i - 2] === "1" || (s[i - 2] === "2" && s[i - 1] <= "6")) {
      dp[i] += dp[i - 2];
    }
    // console.log(dp[i], i);
  }
  // console.log(dp);
  return dp[len];
};

```

时间复杂度O(n), 空间复杂度O(n)