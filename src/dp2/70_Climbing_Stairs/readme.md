#### 题目描述

假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。<br>

例子1<br>

Input: 2<br/>

output: 2<br>

解释： 有两种方法可以爬到楼顶。<br>
1.  1 阶 + 1 阶<br>
2.  2 阶。<br>
<br/>

例子2<br>

Input: 3<br/>

output: 3<br>

解释： 有三种方法可以爬到楼顶。<br>
1.  1 阶 + 1 阶 + 1 阶<br>
2.  1 阶 + 2 阶<br>
3.  2 阶 + 1 阶<br>

#### 思考

这基本上是最经典的动态规划题目，动态规划的关键是确立动态转移方程<br>
这里很明显可以看出dp[n] = dp[n-1]+dp[n-2],也就是爬n个台阶的方法等于爬n-1个台阶的方法和爬n-2个台阶的方法<br>

#### 实现1
```js
/**
 * @param {number} n
 * @return {number}
 */
// Runtime: 72 ms, faster than 88.54% of JavaScript online submissions for Climbing Stairs.
// Memory Usage: 38.3 MB, less than 56.43% of JavaScript online submissions for Climbing Stairs.
export default (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;
  let pre1 = 1;
  let pre2 = 2;
  for (let i = 3; i <= n; i++) {
    const temp = pre2;
    pre2 = pre1 + pre2;
    pre1 = temp;
  }
  return pre2;
};

```
时间复杂度O（n），  空间复杂度O（1）