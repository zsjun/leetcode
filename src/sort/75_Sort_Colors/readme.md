## 75. 颜色分类

### 题目描述

给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
<br/>

进阶:<br/>

1 你可以不使用代码库中的排序函数来解决这道题吗？<br/>
2 你能想出一个仅使用常数空间的一趟扫描算法吗？<br/>


例子1<br/>

输入: nums = [2,0,2,1,1,0]<br/>
输出: [0,0,1,1,2,2]<br/>



例子2<br/>

输入: nums = [2,0,1]<br/>
输出: [0,1,2]<br/>

例子3<br/>

输入: nums = [0]<br/>
输出: [0]<br/>

例子4<br/>

输入: nums = [1]<br/>
输出: [1]<br/>

提示：<br/>
1 n == nums.length<br/>
2 1 <= n <= 300<br/>
3 nums[i] 为 0、1 或 2<br/>


### 思考 1
这里使用桶排序，直接统计0，1，2出现的次数，直接修改原数组就可以了<br/>

当然这里还有其它方法，比如使用双指针，因为前面使用过双指针，我们可以实现下<br/>

双指针也很简单，一个low指向数组的开始，一个high指向数组的末尾，使用i进行遍历数组，如果发现nums[i]等于0，则和low交换，并且low++，当发现等于2，则和high交换并且high--<br/>

### 实现1

```ji
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// [2, 0, 2, 1, 1, 0][(2, 0, 2, 1, 1, 0)];
export default (nums) => {
  const res = new Array(3).fill(0);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      res[0]++;
    } else if (nums[i] === 1) {
      res[1]++;
    } else {
      res[2]++;
    }
  }
  // console.log(res);
  for (let i = 0; i < res[0]; i++) {
    nums[i] = 0;
  }
  for (let i = 0; i < res[1]; i++) {
    nums[res[0] + i] = 1;
  }
  for (let i = 0; i < res[2]; i++) {
    nums[res[0] + i + res[1]] = 2;
  }
};


```

### 实现2

```js

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// [2, 0, 2, 1, 1, 0][(2, 0, 2, 1, 1, 0)];
const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};

export default (nums) => {
  let low = 0;
  while (nums[low] === 0) {
    low++;
  }
  let high = nums.length - 1;
  while (nums[high] === 2) {
    high--;
  }
  for (let i = low; i <= high; ) {
    if (low > high) {
      break;
    }
    if (nums[i] === 0 || nums[i] === 2) {
      if (nums[i] === 0) {
        if (low !== i) {
          swap(nums, low, i);
        }
        low++;
        i = low;
      } else if (nums[i] === 2) {
        if (i !== high) {
          swap(nums, i, high);
        }
        high--;
      }
      continue;
    } else {
      i++;
    }
  }
  return nums;
};

```

实现1的算法时间复杂度 O(n), 空间复杂度 O(1)
<br>

实现2的算法时间复杂度 O(n), 空间复杂度 O(1)
<br>