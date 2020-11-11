## 445 分配饼干

### 题目描述

有一群孩子和一堆饼干，每个孩子有一个饥饿度，每个饼干都有一个大小。每个孩子只能吃最多一个饼干，且只有饼干的大小大于孩子的饥饿度时，这个孩子才能吃饱。求解最多有多少孩子可以吃饱。

例子

输入两个数组，分别代表孩子的饥饿度和饼干的大小。输出最多有多少孩子可以吃饱的数量。
Input: [1,2], [1,2,3]
Output: 2
在这个样例中，我们可以给两个孩子喂[1,2]、[1,3]、[2,3]这三种组合的任意一种。

### 思考 1

这里很明显是属于贪心算法，优先把饥饿度最小的孩子用最小的饼干喂饱，一定可以得到最多的。

### 代码

```js
export default (childrens, cookies) => {
  if (!childrens || childrens.length === 0) return 0;
  childrens.sort();
  cookies.sort();
  // 最多可以有多少孩子
  let res = 0;
  // 已经分配的饼干索引
  let cookiesIndex = 0;
  // 优先使用最小的饼干喂饱饥饿最下的孩子
  for (let i = 0; i < childrens.length; i++) {
    for (let j = cookiesIndex; j < cookies.length; j++) {
      if (cookies[j] >= childrens[i]) {
        res++;
        cookiesIndex = j + 1;
        break;
      }
    }
  }
  return res;
};
```

算法时间复杂度 O(childrens.length\*cookies.length), 空间复杂度 O(1)
