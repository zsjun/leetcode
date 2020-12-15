### 300. 最长上升子序列

#### 题目描述

给定一个无序的整数数组，找到其中最长上升子序列的长度。<br/>



例子1<br/>


Input:
[10,9,2,5,3,7,101,18]
<br/>

output: 4<br/>

解释： 解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。<br/>

<br/>

例子2<br/>

Input:
nums = [0,1,0,3,2,3]<br/>

output: 4<br/>

例子3<br/>


Input:
nums = [7,7,7,7,7,7,7]<br/>

output: 1<br/>


提示：<br/>


1 1 <= nums.length <= 2500<br/>
2 -10^4 <= nums[i] <= 10^4<br



#### 思考

1 题目使用动态规划，dp[i]表示以nums[i]结尾的增长子数列<br/>

然后很容易就可以发现状态转移方程dp[i] 等于 i 前面所有小于nums[i]的子数列的最大值<br/>

代码比较简单，参考实现1<br/>

2 然后题目还要求实现O（n * lgn）的时间复杂度，涉及到lgn肯定是二分查找，可以在哪里查找呢？<br/>

在原数组中查找肯定不可能，那在哪里查找呢？可以发现在上面实现1中为什么是O(n * n)? 有哪些可以改进呢？<br/>

可以发现上面就是因为需要不断去遍历前面的结果，那么我们是否可以改进下，重新定义dp[i]的含义，让dp[i]表示包含i+1个数字的增长数列。<br/>

那么dp就是一个nums中增长子数列，现在已经知道dp[i],那么如何更新dp呢？<br/>

现在有新的nums[i+1]了，那么如何更新dp呢？

可以发现在dp中使用二分查找找到nums[i+1]的位置，根据什么查找位置呢？

就是nums[i+1]在dp中的位置pos，等于nums[i+1]>dp[pos]  && nums[i+1]<dp[pos+1]，或者直接替换dp[dp.length-1]


num dp<br/>
10 [10]  10加入dp<br/>
9  [9]  9加入的时候，发现9比10小，为了更长子数列，9替换10<br/>
2  [2] 2加入的时候，发现2比9小，为了更长子数列，2替换  9<br/>
5  [2，5]  5 加入，发现比大，变为 [2，5] <br/>
3  [2,3]  3比5小<br/>
7  [2,3,7]  7 比 3大<br/>
101 [2,3,7,101] 101比7大<br/>
18 [2,3,7,18] 18比101小<br/>

可以参考实现2<br/>

#### 实现1

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
//  [10,9,2,5,3,7,101,18]
//  4
// Runtime: 184 ms, faster than 18.89% of JavaScript online submissions for Longest Increasing Subsequence.
// Memory Usage: 39.6 MB, less than 25.03% of JavaScript online submissions for Longest Increasing Subsequence.
export default (nums) => {
  const len = nums.length;
  const dp = new Array(len).fill(1);
  let max = 1;
  for (let i = 1; i < nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
        max = Math.max(dp[i], max);
      } else if (nums[i] === nums[j]) {
        dp[i] = Math.max(dp[i], dp[j]);
        max = Math.max(dp[i], max);
      }
    }
  }
  return max;
};


```
时间复杂度O（n * n), 空间复杂度O（ n）



#### 实现2
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
//  [10,9,2,5,3,7,101,18]
//  4

const binarySearchPosition = (dp, target, high) => {
  let low = 0;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (target === dp[mid]) return mid;
    else if (target < dp[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
};
// [10, 9, 2, 5, 3, 7, 101, 18];
// Runtime: 84 ms, faster than 90.03% of JavaScript online submissions for Longest Increasing Subsequence.
// Memory Usage: 40.2 MB, less than 19.47% of JavaScript online submissions for Longest Increasing Subsequence.
export default (nums) => {
  const len = nums.length;
  if (!nums || len === 0) return 0;
  if (len === 1) return 1;
  let dp = new Array(len).fill(Number.MAX_VALUE);
  for (let i = 0; i < len; i++) {
    let pos = binarySearchPosition(dp, nums[i], i);
    dp[pos] = nums[i];
    console.log(dp);
  }

  for (let i = dp.length - 1; i >= 0; i--) {
    if (dp[i] !== Number.MAX_VALUE) return i + 1;
  }

  return 0;
};

```
时间复杂度O（n * lgn），空间复杂度O(n)