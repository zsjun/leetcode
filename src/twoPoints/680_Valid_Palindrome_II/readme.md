## 680. 验证回文字符串 Ⅱ

### 题目描述

最多删除一个字符后，判断剩余的字符串是否为回文串。
<br/>


例子1<br/>

输入: "aba"<br/>
输出: True<br/>


例子2<br/>

输入："abca"<br/>
输出：True<br/>
解释：可以删除c字符就可以了<br/>



提示：<br/>

1 字符串长度小于50000<br/>



### 思考 1


1 直接使用两个指针，一个指针从开头，一个从结尾，如果发现不一致就看下删除low指向的字符，看下剩下的是否是回文字符串，看下删除high指向的字符，剩下的是否是回文字符串，
最后如果发现删除了超过一个字符，则返回false，否则为true，思路比较简单。


### 实现1

```js
/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s, low, high, count) => {
  if (count > 1) return false;
  while (low < high) {
    if (s[low] !== s[high]) {
      count++;
      return isPalindrome(s, low, high - 1, count) || isPalindrome(s, low + 1, high, count);
    } else {
      low++;
      high--;
    }
  }
  return true;
};
const validPalindrome = (s) => {
  if (!s) {
    return false;
  }
  if (s.length === 1) {
    return true;
  }
  let low = 0;
  let high = s.length - 1;
  let count = 0;
  return isPalindrome(s, 0, high, count);
};
export default isPalindrome;

```

这里的时间复杂度可以很容易的看出是O（n）因为我们不管递归多少次，最多也是遍历整个字符串进行对比，空间复杂度O(1)