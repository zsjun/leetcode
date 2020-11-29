## 154 旋转数组查中寻找最小的元素

### 题目描述

假设一个排好序的数组在某处执行了一次“旋转”，找出最小的元素（数组元素可能重复），数组中包含重复数字<br/>


例子1<br/>

输入: [1,3,5]<br/>
输出: 1<br/>


例子2<br/>

输入: [2,2,2,0,1]<br/>
输出: 0<br/>

例子3<br/>

输入: [3,3,1,3]<br/>
输出: 1<br/>

例子4<br/>

输入: [10,1,10,10,10]<br/>
输出: 1<br/>



### 思考 1

这里和上面的81题目有点类似，应该可以采用同样的策略，只不过是把81的题目的target变成了最小的数字,思路基本类似。<br/>

另外说一下，这题在leetcode上标记为hard，但是81题标记为medium，但是两者的难度差不多，所以有时候，没有必要对题目的难度过于太在意<br/>

### 实现1

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
// 2, 2, 2, 0, 1;
export default (nums) => {
  if (nums.length === 0 || !nums) {
    return false;
  }
  if (nums.length === 1) return nums[0];
  let low = 0;
  let high = nums.length - 1;
  let min = Number.MAX_VALUE;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (nums[mid] < nums[high]) {
      high = mid - 1;
      min = Math.min(nums[mid], min);
    } else if (nums[mid] > nums[low]) {
      min = Math.min(nums[low], min);
      low = mid + 1;
    } else if (nums[low] === nums[mid]) {
      min = Math.min(nums[low], min);
      low++;
    } else {
      min = Math.min(nums[high], min);
      high--;
    }
  }
  return min;
};



```

算法时间复杂度 O(n),因为最坏的情况下，二分查找就变成了遍历数组了。 空间复杂度 O(1)
