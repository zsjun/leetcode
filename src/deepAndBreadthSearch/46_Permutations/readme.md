### 46. 全排列

#### 题目描述

给定一个 没有重复 数字的序列，返回其所有可能的全排列。<br/>

例子1 <br/>

input：[1,2,3]<br/>
output：[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]<br/>


例子2 <br/>

input：[0,1]<br/>
output：[[0,1],[1,0]]<br/>

例子1 <br/>

input：[1]<br/>
output：[[1]]<br/>

提示：<br/>


1 1 <= nums.length <= 6<br/>
2 -10 <= nums[i] <= 10<br/>
3 All the integers of nums are unique.<br/>

#### 思考1

简单的回溯法，<br/>

怎样输出所有的排列方式呢?对于每一个当前位置 i，我们可以将其于之后的任意位置交换， 然后继续处理位置 i+1，直到处理到最后一位。<br/>

#### 实现1

```js
const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};
// count 遍历的次数
const backtracking = (nums, count, res) => {
  if (count === nums.length - 1) {
    res.push(nums);
  }

  for (let i = count; i < nums.length; i++) {
    // 修改状态
    if (i !== count) {
      swap(nums, i, count);
    }
    backtracking([...nums], count + 1, res);
    // 恢复状态
    if (i !== count) {
      swap(nums, count, i);
    }
  }
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export default (nums) => {
  if (nums.length === 1) {
    return [[nums[0]]];
  }
  let res = [];
  backtracking(nums, 0, res);
  return res;
};

```

时间复杂度0(n^2(n)!), 空间复杂度是O（n^3）