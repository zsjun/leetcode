# 334. 递增的三元子序列

## 题目描述

给定一个未排序的数组，判断这个数组中是否存在长度为 3 的递增子序列。

数学表达式如下:

如果存在这样的 i, j, k, 且满足 0 ≤ i < j < k ≤ n-1，
使得 arr[i] < arr[j] < arr[k] ，返回 true ; 否则返回 false 。
说明: 要求算法的时间复杂度为 O(n)，空间复杂度为 O(1) 。

示例 1:

输入: [1,2,3,4,5]
输出: true

示例 2:

输入: [5,4,3,2,1]
输出: false

## 解题思路

### 思考地图 1

看到这个题目，首先觉得熟悉，因为以前做过，甚至都记得解法，所以直接使用了记忆中的解法。<br/>
思路也很简单，但是很不容易想到<br/>
1 设置一个 min 和一个 big 值，min 和 big 的初始值都是无限大<br/>
2 一次遍历数组，当发现小于或者等于 min 的时候，赋值给 min，如果发现比 min 大且小于等于 big 的时候，赋值给 big，这里非常巧妙的是保证了 big 永远比 min 大，所以当发现一个大于 big 的数的时候，可以直接返回 true。<br/>

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
export default (nums) => {
  if (!nums || nums.length < 3) return false;
  let min = Number.MAX_VALUE;
  let big = Number.MAX_VALUE;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= min) {
      min = nums[i];
    } else if (nums[i] <= big) {
      big = nums[i];
    } else {
      return true;
    }
  }
  return false;
};
```

时间复杂度 O(n)，空间复杂度 O(1)
