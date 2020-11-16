763. Partition Labels

A string S of lowercase English letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

Example 1:

Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.

Note:

S will have length in range [1, 500].
S will consist of lowercase English letters ('a' to 'z') only.

## 763-划分字母区间

### 题目描述

字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。返回一个表示每个字符串片段的长度的列表。

例子

输入：S = "ababcbacadefegdehijhklij"
输出：[9,7,8]
解释：
划分结果为 "ababcbaca", "defegde", "hijhklij"。
每个字母最多出现在一个片段中。
像 "ababcbacadefegde", "hijhklij" 的划分是错误的，因为划分的片段数较少。

提示

S的长度在[1, 500]之间。
S只包含小写字母 'a' 到 'z' 。


### 思考 1

1 思路很简单，利用递归，不断的去查找
2 利用贪心算法和双指针，首先使用一个数组存储所有字符出现的最后位置，然后利用双指针，一个指向子串开始的位置，一个指向子串结束的位置，然后不断查找，当发现一个字母已经到达了它在字符串中的最后位置的时候，就是相当于发现了一个符合条件的子串。
代码很简单，稍微看下，就明白了。

这里可以得到一个小提示，一旦涉及到字符串的时候，很自然的就要想到使用一个长度为26的数组来存储。


### 代码1

```js
/**
 * @param {string} S
 * @return {number[]}
 */

const getBigStr = (S, begin, res) => {
  let max = begin;
  const len = S.length;
  if (begin >= S.length) {
    return;
  }
  const lastIndex = S.lastIndexOf(S[begin]);
  if (lastIndex !== -1) {
    max = Math.max(max, lastIndex);
    let s1 = S.substring(begin, lastIndex + 1);
    for (let i = 1; i < s1.length; i++) {
      const newLastIndex = S.lastIndexOf(s1[i]);
      if (newLastIndex > max) {
        max = newLastIndex;
        s1 = S.substring(begin, max + 1);
      }
    }
    res.push(S.substring(begin, max + 1));
  } else {
    res.push(S[begin]);
    max = begin++;
  }
  return max;
};
export default (S) => {
  let res = [];
  let max = -1;
  while (max < S.length) {
    max = getBigStr(S, max + 1, res);
  }
  return res.map((item) => item.length);
};
```


### 代码1

```js
export default (S) => {
  if (S == null || S.length === 0) {
    return null;
  }
  const list = [];
  // 记录每个字符出现在字符串中的最后的位置
  const map = new Array(26).fill(0);

  for (let i = 0; i < S.length; i++) {
    map[S.charCodeAt(i) - 97] = i;
  }
  // 记录每个子串出现的开始和结束
  let last = 0;
  let start = 0;
  for (let i = 0; i < S.length; i++) {
    last = Math.max(last, map[S.charCodeAt(i) - 97]);
    if (last === i) {
      list.push(last - start + 1);
      start = last + 1;
    }
  }
  return list;
};
```
时间复杂度O（n）, 空间复杂度O（1）






