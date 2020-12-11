### 413. 等差数列划分

#### 题目描述

如果一个数列至少有三个元素，并且任意两个相邻元素之差相同，则称该数列为等差数列。<br/>

例如，以下数列为等差数列:<br/>
1, 3, 5, 7, 9<br/>
7, 7, 7, 7<br/>
3, -1, -5, -9<br/>
数组 A 包含 N 个数，且索引从0开始。数组 A 的一个子数组划分为数组 (P, Q)，P 与 Q 是整数且满足 0<=P<Q<N 。<br/>

如果满足以下条件，则称子数组(P, Q)为等差数组：<br/>

元素 A[P], A[p + 1], ..., A[Q - 1], A[Q] 是等差的。并且 P + 1 < Q 。<br/>

函数要返回数组 A 中所有为等差数组的子数组个数。<br/>



例子1<br/>

Input: A = [1, 2, 3, 4]<br/>

output: 3<br/>

解释：A 中有三个子等差数组: [1, 2, 3], [2, 3, 4] 以及自身 [1, 2, 3, 4]。
<br/>



#### 思考

1 第一种dp[n]表示n结尾的一共有多少种排列，所以dp[n+1]呢？<br/>

这里应该很容易想到dp[n+1] 等于dp[n]和以n+1结尾的数字可以组成的等差数列的和。<br/>

不过这里需要注意的是虽然给出的测试用例是排好序的，但是实际上并没有排好序，所以不要按照排好序来处理<br/>

可以看下实现1<br/>

2 这里如果换一种看法，如果让dp[n]还是表示以下标为n结尾一共有多少种排列？<br/>

那么dp[n+1]有多少种呢？<br/>

如果想不到，可以试试测试用例[1,2,3,4,5]<br/>

分别写下dp[1],dp[2]..dp[5]的结果，看下有什么规律<br/>

所以很容易看到dp[n+1] = dp[n]+1,最后因为我们统一的是每个位置的排列数，所以最后求和就可以了<br/>



#### 实现1
```js
/**
 * @param {number[]} A
 * @return {number}
 */
// Runtime: 84 ms, faster than 18.63% of JavaScript online submissions for Arithmetic Slices.
// Memory Usage: 41.1 MB, less than 5.88% of JavaScript online submissions for Arithmetic Slices.
export default (A) => {
  if (!A || A.length < 3) return [];
  let dp = [];
  if (A[2] - A[1] === A[1] - A[0]) {
    dp.push([A[0], A[1], A[2]]);
  }
  for (let i = 3; i < A.length; i++) {
    const tempArr = [];
    tempArr.push(A[i]);
    const val = A[i] - A[i - 1];
    for (let k = i - 1; k >= 0; k--) {
      if (tempArr[0] - A[k] === val) {
        tempArr.unshift(A[k]);
        if (tempArr.length >= 3) {
          dp.push([...tempArr]);
        }
      } else {
        break;
      }
    }
  }
  return dp.length;
};

```
时间复杂度O（n^2），  空间复杂度O（n^2）

#### 实现2
```js
// Runtime: 76 ms, faster than 76.47% of JavaScript online submissions for Arithmetic Slices.
// Memory Usage: 38.4 MB, less than 51.96% of JavaScript online submissions for Arithmetic Slices.
export default (A) => {
  if (!A || A.length < 3) return [];
  const len = A.length;
  const dp = new Array(len).fill(0);
  for (let i = 2; i < len; ++i) {
    if (A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
      dp[i] = dp[i - 1] + 1;
    }
  }
  // console.log(dp);
  return dp.reduce((a, b) => a + b);
};

```
时间复杂度O（n）空间复杂度O（n）