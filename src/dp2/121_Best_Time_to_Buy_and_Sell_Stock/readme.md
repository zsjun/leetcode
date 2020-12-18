### 121. 买卖股票的最佳时机

#### 题目描述

给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。<br/>

如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。<br/>

注意：你不能在买入股票前卖出股票。
<br/>





例子1<br/>

Input:  [7,1,5,3,6,4]<br/>

output: 5<br/>

解释： 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。

<br/>

例子2<br/>

Input:[7,6,4,3,1]<br/>
output: 0<br/>
解释：在这种情况下, 没有交易完成, 所以最大利润为 0。

#### 思考

1 题目比较简单,简单的一维动态规划就可以了<br/>


#### 实现1
```js
/**
 * @param {number[]} prices
 * @return {number}
 */
// Runtime: 96 ms, faster than 32.40% of JavaScript online submissions for Best Time to Buy and Sell Stock.
// Memory Usage: 39.5 MB, less than 24.29% of JavaScript online submissions for Best Time to Buy and Sell Stock.
export default (prices) => {
  const n = prices.length;
  const dp = new Array(n + 1).fill(0);

  for (let i = 2; i <= n; i++) {
    let max = 0;
    for (let j = i - 2; j >= 0; j--) {
      if (prices[j] < prices[i - 1]) {
        max = Math.max(max, prices[i - 1] - prices[j]);
      } else {
        break;
      }
    }
    dp[i] = Math.max(dp[i], max, dp[i - 1]);
  }
  return dp[n];
};


```
时间复杂度O（n^2 ），  空间复杂度O（ n）