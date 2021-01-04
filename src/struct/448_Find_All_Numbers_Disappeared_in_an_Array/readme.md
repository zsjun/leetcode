### 448. 找到所有数组中消失的数字

#### 题目描述

给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。<br/>

找到所有在 [1, n] 范围之间没有出现在数组中的数字。<br/>


例子1<br/>

Input:  [4,3,2,7,8,2,3,1]<br/>

output: [5,6]<br/>


#### 思考

1 首先想到了使用数组的特性，因为这里1 ≤ a[i] ≤ n，所可以把每个a[i]放到数组中a[i]的位置上，到最后发现数组上没有放置数的位置就是缺失的数字<br/>


参考实现1<br/>


#### 实现1

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */

const swap = (nums, i, j) => {
  const temp = nums[j];
  nums[j] = nums[i];
  nums[i] = temp;
};
// Runtime: 204 ms, faster than 29.69% of JavaScript online submissions for Find All Numbers Disappeared in an Array.
// Memory Usage: 47.3 MB, less than 48.68% of JavaScript online submissions for Find All Numbers Disappeared in an Array.
export default (nums) => {
  const len = nums.length;
  const res = new Array(len).fill(0);
  for (let i = 0; i < nums.length; i++) {
    if (res[nums[i] - 1] === 0) {
      res[nums[i] - 1] = nums[i];
    }
  }

  for (let i = 0; i < res.length; i++) {
    if (res[i] === 0) {
      res[i] = i + 1;
    } else {
      res[i] = 0;
    }
  }

  return res.filter((item) => item !== 0);
};

```

时间复杂度O（n），空间复杂度O（n）
