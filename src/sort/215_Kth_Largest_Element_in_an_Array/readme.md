## 215 快速选择

### 题目描述

在一个未排序的数组中，找到第 k 大的数字。<br/>

注意，这里你可以默认肯定有解<br/>



例子1<br/>

输入: [3,2,1,5,6,4] and k = 2<br/>
输出: 5<br/>


例子2<br/>

输入: [3,2,3,1,2,4,5,5,6] and k = 4<br/>
输出: 4<br/>

### 思考 1

基本上先排序，然后直接输出就可以了 <br/>

这里也可以自己实现，比如使用快速排序，一般快排是查找第k大数的常用方法<br/>

### 实现1

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

export default (nums, k) => {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
};

```


### 实现2

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

const getPosition = (nums, p, r) => {
  const mid = Math.floor(p + (r - p) / 2);
  let temp;
  let pos;
  let tempArr = [nums[p], nums[r], nums[mid]].sort((a, b) => a - b);
  temp = tempArr[1];
  pos = temp === nums[p] ? p : temp === nums[r] ? r : mid;
  for (let i = p; i <= r; i++) {
    if (nums[i] < temp && i > pos) {
      const _temp = nums[i];
      if (i > pos) {
        for (let j = i; j > pos; j--) {
          nums[j] = nums[j - 1];
        }
      }
      nums[pos] = _temp;
      pos++;
    } else if (nums[i] > temp && i < pos) {
      nums[pos] = nums[i];
      nums[i] = temp;
      pos = i;
    }
  }
  nums[pos] = temp;

  return pos;
};
// p 起始位置， r 结束位置
// 3, 2, 3, 1, 2, 4, 5, 5, 6
const quickSort = (nums, p, r) => {
  if (p < r) {
    const q = getPosition(nums, p, r);
    quickSort(nums, p, q - 1);
    quickSort(nums, q + 1, r);
  }
};
export default (nums, k) => {
  // nums.sort((a, b) => a - b);
  quickSort(nums, 0, nums.length - 1);
  return nums[nums.length - k];
};

```


实现1的算法时间复杂度 O(nlgn), 空间复杂度 O(1)<br>
