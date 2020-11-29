## 540. 有序数组中的单一元素

### 题目描述

给定一个只包含整数的有序数组，每个元素都会出现两次，唯有一个数只会出现一次，找出这个数。<br/>


例子1<br/>

输入: [1,1,2,3,3,4,4,8,8]<br/>
输出: 2<br/>


例子2<br/>

输入: [3,3,7,7,10,11,11]<br/>
输出: 10<br/>

注意: 您的方案应该在 O(log n)时间复杂度和 O(1)空间复杂度中运行。<br/>





### 思考 1

很简单，用二分查找就可以,要点就是因为数组中除了一个数字，其它的数字都是出现两次，所以可以根据mid的下标是奇数或者偶数来判断数字是否出现在那一侧<br/>

如果mid是偶数，那说明low到mid有奇数个数字，所以就可以判断nums[mid] 和nums[mid-1]是否相等，来判断只出现一次的数字是否出现在这一侧。<br/>

思路比较简单<br/>

### 实现1

```js
/**
 * @param {number[]} nums
 * @return {number}
 */

export default (nums) => {
  if (nums.length === 1) return nums[0];
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    console.log(low, high, mid);
    if (
      (mid + 1 < nums.length && nums[mid] !== nums[mid + 1] && mid >= 1 && nums[mid] !== nums[mid - 1]) ||
      (mid === nums.length - 1 && nums[mid] !== nums[mid - 1]) ||
      (mid === 0 && nums[mid] !== nums[mid + 1])
    ) {
      return nums[mid];
    }
    if (mid % 2 !== 0) {
      if (mid >= 1 && nums[mid - 1] === nums[mid]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    } else {
      if (mid >= 1 && nums[mid] === nums[mid - 1]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }
  return nums[low];
};

};



```

算法时间复杂度 O(lgn)。 空间复杂度 O(1)