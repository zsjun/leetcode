### 646. 最长数对链

#### 题目描述

给出 n 个数对。 在每一个数对中，第一个数字总是比第二个数字小。<br/>

现在，我们定义一种跟随关系，当且仅当 b < c 时，数对(c, d) 才可以跟在 (a, b) 后面。我们用这种形式来构造一个数对链。<br/>

给定一个数对集合，找出能够形成的最长数对链的长度。你不需要用到所有的数对，你可以以任何顺序选择其中的一些数对来构造。
<br/>


例子1<br/>

Input:  [[1,2], [2,3], [3,4]]<br/>

output: 2<br/>

解释：最长的数对链是 [1,2] -> [3,4]
<br/>

提示：<br/>

给出数对的个数在 [1, 1000] 范围内。<br/>


#### 思考

1 题目比较简单，先排序，然后使用动态规划缓存前面的状态就可以了。
#### 实现1
```js
/**
 * @param {number[][]} pairs
 * @return {number}
 */
//  Runtime: 92 ms, faster than 92.21% of JavaScript online submissions for Maximum Length of Pair Chain.
//  Memory Usage: 42.8 MB, less than 74.03% of JavaScript online submissions for Maximum Length of Pair Chain.
export default (pairs) => {
  if (!pairs || pairs.length === 0) return [];

  if (pairs.length === 1 || pairs.length === 2) return [pairs[0]];
  pairs.sort((a, b) => a[0] - b[0]);
  const dp = [pairs[0]];
  // console.log(pairs);
  for (let i = 1; i < pairs.length; i++) {
    if (pairs[i][0] > dp[dp.length - 1][1]) {
      dp.push(pairs[i]);
    } else if (pairs[i][1] < dp[dp.length - 1][1]) {
      dp[dp.length - 1] = pairs[i];
    }
  }
  // console.log(dp);
  return dp.length;
};

```
时间复杂度O（n），  空间复杂度O（n）