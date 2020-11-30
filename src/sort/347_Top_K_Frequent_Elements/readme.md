## 347. 前 K 个高频元素

### 题目描述

给定一个非空的整数数组，返回其中出现频率前 k 高的元素。<br/>



例子1<br/>

输入: nums = [1,1,1,2,2,3], k = 2<br/>
输出: [1,2]<br/>



例子2<br/>

输入: nums = [1], k = 1<br/>
输出: [1]<br/>

提示：<br/>
1 你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。<br/>
2 你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。<br/>
3 题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的。<br/>
4 你可以按任意顺序返回答案。<br/>


### 思考 1

桶排序顾名思义就是我们事先放几个桶，这几个桶是排好序的，然后我们可以把符合每个桶的元素放到每个桶里边，这样就天然变成有序的了<br/>

这里我们可以根据数组中每个不同的数字分别设置一个桶，每个桶里放入数字出现的次序，最后返回钱k个高频元素就可以了<br/>

### 实现1

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

export default (nums, k) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      const count = +map.get(nums[i]) + 1;
      map.set(nums[i], count);
    }
  }
  let res = [];
  for (let [key, value] of map) {
    res.push({
      key,
      value,
    });
  }
  res.sort((a, b) => b.value - a.value);
  res = res.slice(0, k);
  return res.map((item) => +item.key);
};

```

实现1的算法时间复杂度 O(nlgn), 空间复杂度 O(1)
<br>