## 633. 平方数之和

### 题目描述

给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a^2 + b^2 = c 。
<br/>


例子1<br/>

输入: 5<br/>
输出: True<br/>
解释: 1 * 1 + 2 * 2 = 5<br/>


例子2<br/>

输入：3<br/>
输出：false<br/>

例子3<br/>

输入：4<br/>
输出：true<br/>

例子4<br/>

输入：2<br/>
输出：true<br/>

例子5<br/>

输入：1<br/>
输出：true<br/>


提示：<br/>

1 0 <= c <= 231 - 1<br/>



### 思考 1


1 直接使用两个指针，遍历从1到Math.sqrt(c)就可以了,题目比较简单。


### 实现1

```js
/**
 * @param {number} c
 * @return {boolean}
 */

export default (c) => {
  let high = Math.ceil(Math.sqrt(c));
  let low = 0;
  while (low <= high) {
    if (Math.pow(low, 2) + Math.pow(high, 2) === c) {
      return true;
    } else if (Math.pow(low, 2) + Math.pow(high, 2) > c) {
      high--;
    } else {
      low++;
    }
  }
  return false;
};

```

这里的时间复杂度可以很容易的看出是O（Math.sqrt(c)），空间复杂度O(1)
