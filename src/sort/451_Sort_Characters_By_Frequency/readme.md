## 451. 根据字符出现频率排序

### 题目描述

给定一个字符串，请将字符串里的字符按照出现的频率降序排列。<br/>



例子1<br/>

输入: "tree"<br/>
输出: "eert"<br/>
解释: 'e'出现两次，'r'和't'都只出现一次。
因此'e'必须出现在'r'和't'之前。此外，"eetr"也是一个有效的答案<br/>


例子2<br/>

输入: "cccaaa"<br/>
输出: "cccaaa"<br/>
解释: 'c'和'a'都出现三次。此外，"aaaccc"也是有效的答案。注意"cacaca"是不正确的，因为相同的字母必须放在一起。
<br/>

例子3<br/>

输入: "Aabb"<br/>
输出: "bbAa"<br/>
解释: 此外，"bbaA"也是一个有效的答案，但"Aabb"是不正确的。
注意'A'和'a'被认为是两种不同的字符。
<br/>


### 思考 1

题目也比较简单，只要思想类似于桶排序，我们先用一个hashMap存储每个字符出现的次数，然后对hashMap进行排序，最后再取出来就可以了。<br/>


### 实现1

```js
/**
 * @param {string} s
 * @return {string}
 */

export default (s) => {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 1);
    } else {
      const count = map.get(s[i]) + 1;
      map.set(s[i], count);
    }
  }
  let res = [];
  for (let [key, value] of map) {
    res.push({
      key,
      value,
    });
  }
  res.sort((a, b) => b.value - a.value);
  let res1 = "";
  for (let i = 0; i < res.length; i++) {
    res1 += res[i].key.repeat(res[i].value);
  }
  return res1;
};

```

实现1的算法时间复杂度 O(nlgn), 空间复杂度 O(1)
这里空间复杂度是O（1）的原因是最多只有26个字母，所以不会一直扩张<br>