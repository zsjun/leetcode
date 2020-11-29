## 81 旋转数组查找数字

### 题目描述

一个原本增序的数组被首尾相连后按某个位置断开(如 [1,2,2,3,4,5] → [2,3,4,5,1,2]，在第一 位和第二位断开)，我们称其为旋转数组。给定一个值，判断这个值是否存在于这个旋转数组中。如果存在返回true，如果不存在返回false<br/>


例子1<br/>

输入: nums = [2,5,6,0,0,1,2], target = 0<br/>
输出: true<br/>


例子2<br/>

输入: nums = [2,5,6,0,0,1,2], target = 3<br/>
输出: false<br/>



### 思考 1

最简单的肯定直接遍历数组，不过这里显然不使用这种<br/>

可以看到数组是一部分升序，另外一部分也是升序，问题是如何找到在哪里分割开？<br/>

当然这里可以遍历数组，找到分割开的两个升序数组，但是这样那不如直接遍历，不用二分查找了。<br/>

那么是否可以换个角度，假设我们如果直接使用二分查找，会怎么样呢？

可以想一下<br/>

刚开始我是想根据mid和mid+1的关系来决定移动low和high或者根据mid和mid-1的关系来决定移动low和high，可是这样感觉逻辑很复杂<br/>

后来看了题解，才明白可以把mid和low和high的关系来移动指针，如果nums[mid] 小于nums[high],那肯定是升序，因为问的数组是升序的，如果target在这个升序数组中，那么就可以排除另一半了<br/>

当nums[mid] 大于nums[low]的时候，说明这也是一个派系数组，如果同时target在这个排序数组呢，同时也能排除另外一半数组了<br/>

这里还有另外一种情况，因为数组中存在重复的数字，如果发现nums[mid]等于num[low]，此时我们可以把low++，重新计算mid，计算target存在的范围<br/>

当nums[mid]等于num[high]，此时我们可以把high，重新计算mid，计算target存在的范围<br/>

但是运行之后，可以发现这里的二分查找和遍历数组使用时间基本差不多。<br/>


### 实现1

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
export default (nums, target) => {
  if (nums.length === 0 || !nums) {
    return false;
  }
  if (nums.length === 1) return nums[0] === target;

  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (nums[mid] === target) {
      return true;
    }
    if (nums[mid] < nums[high]) {
      // 判断target是否在这个范围内
      if (target > nums[mid] && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    } else if (nums[mid] > nums[low]) {
      if (target >= nums[low] && target < nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else if (nums[low] === nums[mid]) {
      low++;
    } else {
      high--;
    }
  }
  return false;
};


```

算法时间复杂度 O(n),因为最坏的情况下，二分查找就变成了遍历数组了。 空间复杂度 O(1)

