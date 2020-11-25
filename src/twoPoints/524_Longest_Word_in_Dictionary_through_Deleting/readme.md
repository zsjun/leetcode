## 524. 通过删除字母匹配到字典里最长单词

### 题目描述

给定一个字符串和一个字符串字典，找到字典里面最长的字符串，该字符串可以通过删除给定字符串的某些字符来得到。如果答案不止一个，返回长度最长且字典顺序最小的字符串。如果答案不存在，则返回空字符串。

<br/>


例子1<br/>

输入: s = "abpcplea", d = ["ale","apple","monkey","plea"]<br/>
输出: "apple"<br/>


例子2<br/>

输入：s = "abpcplea", d = ["a","b","c"]<br/>
输出："a"<br/>


提示：<br/>

1 所有输入的字符串只包含小写字母。<br/>
2 字典的大小不会超过 1000。<br/>
3 所有输入的字符串长度不会超过 1000。<br/>



### 思考 1


1 这个应该也很简单，主要是先排序数组，然后遍历数组中每个元素，假设数组中元素为s1,判断下s中是否存在s1中所有字符，且s1中出现的每个字符必须和出现在s中的相对顺序都一样，因为只能在s中删除字符变成s1,如果相对顺序不一致，就无法通过s中删除字符变成s1.<br/>

这里需要注意的是js中对于字符串的字典排序使用localeCompare<br/>

indexOf函数可以指定第二个参数<br/>


### 实现1

```js
/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
export default (s, d) => {
  // 首先按照长度降序排序，如果字符串长度相同，按照字典序升序排序
  d.sort((a, b) => {
    if (a.length !== b.length) {
      return b.length - a.length;
    }
    return a.localeCompare(b);
  });

  for (let i = 0; i < d.length; i++) {
    let index = -1;
    for (let j = 0; j < d[i].length; j++) {
      // 判断在d[i]中的字符是否也在s中，同时相对顺序是一定的
      index = s.indexOf(d[i][j], index + 1);
      // 如果不存在，就没必要进行下去了
      if (index < 0) {
        break;
      }
    }
    // 如果找到了，直接跳出
    if (index >= 0) {
      return d[i];
    }
  }
  return "";
};

```

这里的时间复杂度可以很容易的看出是Math.max(（d.length* d[i].length * s.length）,s.length* lg(s.length))
因为可以看到是三层循环和对s进行排序<br/>
空间复杂度O(1)