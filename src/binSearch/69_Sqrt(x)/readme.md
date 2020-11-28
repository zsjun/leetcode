## 69 求开方

### 题目描述

给定一个非负整数，求它的开方，向下取整。<br/>



例子1<br/>

输入: 8<br/>
输出: 2<br/>
解释: 8 的开方结果是 2.82842...，向下取整即是 2。<br/>

例子2<br/>

输入: 4<br/>
输出: 2<br/>
解释: 4 的开方结果是 2。<br/>

说明<br/>
0 <= x <= 2^31 - 1
### 思考 1

这个思路很简单，因为是求n的开方，可以查找1到n/2的数字，
这里就可以使用二分查找，如果发现等于n，则返回，如果大于n，则可以在比较小的一半中查找，如果发现小于n，则可以在比较大的一半中查找

当然这个题目还有其他的数学解法，这里我们只是了解二分查找的思想，其他的数学解法，可以自己去了解。

### 实现1

```js
/**
 * @param {number} x
 * @return {number}
 */
export default (x) => {
  const halfX = Math.ceil(x / 2);
  let low = 1;
  let high = halfX;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low * low > x ? low - 1 : low + 1;
};

```

算法时间复杂度 O(lgn/2), 空间复杂度 O(1)