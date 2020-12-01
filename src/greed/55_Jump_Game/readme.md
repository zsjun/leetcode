## 55. 跳跃游戏

### 题目描述

给定一个非负整数数组，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个位置。<br/>



例子1

输入: [2,3,1,1,4]<br/>

输出: True<br/>

解释: 我们可以先跳 1 步，从位置 0 到达 位置 1, 然后再从位置 1 跳 3 步到达最后一个位置。<br/>

例子2

输入: [3,2,1,0,4]<br/>

输出: False<br/>

解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ， 所以你永远不可能到达最后一个位置。<br/>




### 思考 1

这里很容易理解，我们跳第一步的时候，有一个可以跳的范围，在这个范围内，我们肯定想着下一步能跳的更远，那我们应该怎么选择呢？<br/>

肯定是选择能跳最远的，这样下一步能选择的范围更大，也更容易到达终点<br/>

思想虽然是一样的，但是实现也不同，一种是确定第一步能跳到最远，然后反过来遍历范围，找到可以跳到最远的距离。可以看下实现1<br/>

另外一种是把不断遍历可到达的范围，然后遍历可到达的范围，不断更新最大可到达的范围，但是这种变量在for循环中，除非逻辑特别清晰，不然很容易出错。<br/>


### 实现1

```js

/**
 * @param {number[]} nums
 * @return {boolean}
 */
export default (nums) => {
  // 只有一个的时候，直接返回
  const len = nums.length;
  if (len === 1) {
    return true;
  }
  let maxRange = nums[0];
  let begin = 0;
  for (let i = 1; i < nums.length; i++) {
    let tempIndex = begin;
    for (let j = begin + 1; j <= maxRange; j++) {
      if (j - begin + nums[j] > maxRange) {
        maxRange = j - begin + nums[j];
        tempIndex = j;
      }
    }
    begin = tempIndex;
    if (maxRange >= len - 1) {
      return true;
    }
  }
  return false;
};

```
### 实现2
```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
export default (nums) => {
  // 只有一个元素，就是能达到
  if (nums.length === 1) return true;
  // 覆盖的范围
  let cover = 0;
  for (let i = 0; i <= cover; i++) {
    // 注意这里是小于等于cover
    cover = Math.max(i + nums[i], cover);
    if (cover >= nums.length - 1) return true; // 说明可以覆盖到终点了
  }
  return false;
};

```
实现1的时间复杂度O（n^2），空间复杂度O（1）<br/>
实现1的时间复杂度O（n），空间复杂度O（1）<br/>