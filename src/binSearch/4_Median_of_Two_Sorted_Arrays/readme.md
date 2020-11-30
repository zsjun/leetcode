## 4. 寻找两个正序数组的中位数

### 题目描述

给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的中位数。<br/>

进阶：你能设计一个时间复杂度为 O(log (m+n)) 的算法解决此问题吗？<br/>


例子1<br/>

输入: nums1 = [1,3], nums2 = [2]<br/>
输出: 2.00000<br/>
解释：合并数组 = [1,2,3] ，中位数 2<br/>

例子2<br/>

输入: nums1 = [1,2], nums2 = [3,4]<br/>
输出: 2.50000<br/>
解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5<br/>

例子3<br/>

输入: nums1 = [0,0], nums2 = [0,0]<br/>
输出: 0.00000<br/>


例子4<br/>

输入: nums1 = [], nums2 = [1]<br/>
输出: 1.00000<br/>

例子5<br/>

输入: nums1 = [2], nums2 = []<br/>
输出: 2.00000<br/>


提示：<br/>
1 nums1.length == m<br/>
2 nums2.length == n<br/>
3 0 <= m <= 1000<br/>
4 0 <= n <= 1000<br/>
5 1 <= m + n <= 2000<br/>
6 -10^6 <= nums1[i], nums2[i] <= 10^6<br/>


### 思考 1

题目如果第一次见到，很难想出如何使用二分查找的，不过也可以思考试试<br/>

首先判断nums1和nums2的数组长度，让nums1的数组长度小于等于nums2的数组长度<br/>

假设k是nums1和nums2合并之后，我们要寻找的中位数下标，这里如果nums1和nums2合并后的长度是奇数，我们可以寻找
k = left的数字
```js
const left = Math.floor((nums1Len + nums2Len + 1) / 2)
```
如果nums1和nums2合并后的长度是偶数，我们可以分别寻找合并后的数组中下标分别是下面这两个位置的，也就是寻找k = left和k=right两个位置的数字
```js
const left = Math.floor((nums1Len + nums2Len + 1) / 2);
  const right = Math.floor((nums1Len + nums2Len + 2) / 2);
```

原理很简单，我们先从nums1中拿出k/2个数字和从nums2中拿出k/2个数字，如果nums1[k/2] 大于nums2[k/2],那么我们要寻找的k位置的数字，肯定在nums1和nums2出去0到k/2的数组中。<br/>

因为nums1[k/2]大于nums2[k/2]，所以就可以排除nums[k/2]之前的数字，但是我们不知道nums1的数字是否都大于nums2[k/2]，所以可以在剩下的数组中寻找排在k/2位置的数字。

### 实现1

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const getKth = (nums1, start1, end1, nums2, start2, end2, k) => {
  const len1 = end1 - start1 + 1;
  const len2 = end2 - start2 + 1;
  // 如果nums1的长度大于nums2的长度，改变两个数组的位置, 让数组长度最小的在前面，防止
  // 这里的nums2[start2 + k - 1]报错
  if (len1 > len2) return getKth(nums2, start2, end2, nums1, start1, end1, k);
  if (len1 === 0) return nums2[start2 + k - 1];
  if (k === 1) return Math.min(nums1[start1], nums2[start2]);

  const i = start1 + Math.min(len1, Math.floor(k / 2)) - 1;
  const j = start2 + Math.min(len2, Math.floor(k / 2)) - 1;

  const nums1End = Math.min(end1, i + 1);
  const nums2End = Math.min(end2, j + 1);
  if (nums1[i] > nums2[j]) {
    return getKth(nums1, start1, nums1End, nums2, j + 1, end2, k - (j - start2 + 1));
  } else {
    return getKth(nums1, i + 1, end1, nums2, start2, nums2End, k - (i - start1 + 1));
  }
};
export default (nums1, nums2) => {
  if (nums1.length === 0 && nums2.length === 1) {
    return nums2[0];
  }
  if (nums1.length === 1 && nums2.length === 0) {
    return nums1[0];
  }
  const nums1Len = nums1.length;
  const nums2Len = nums2.length;
  // 分别找到奇数和偶数的中位数的左边和右边
  const left = Math.floor((nums1Len + nums2Len + 1) / 2);
  const right = Math.floor((nums1Len + nums2Len + 2) / 2);
  // 如果是奇数，只寻找一次就可以了
  if ((nums1Len + nums2Len) % 2 !== 0) {
    return getKth(nums1, 0, nums1Len - 1, nums2, 0, nums2Len - 1, left);
  }
  return (
    (getKth(nums1, 0, nums1Len - 1, nums2, 0, nums2Len - 1, left) +
      getKth(nums1, 0, nums1Len - 1, nums2, 0, nums2Len - 1, right)) *
    0.5
  );
};

```

算法时间复杂度也很容易理解<br/>
m 是nums1.length，n 是nums2.length
因为每次查找的范围都从(m+n)/2 缩小一半范围。所以时间复杂度是O(lg(m+n)) <br/>
空间复杂度 O(lg(m+n))<br/>