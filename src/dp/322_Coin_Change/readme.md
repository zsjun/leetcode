322. Coin Change

You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:

Input: coins = [1, 2, 5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Note:
You may assume that you have an infinite number of each kind of coin.

思考路程
1 找到dp[i]和dp[i+1] 之间的关系，首先确定状态是什么？
 dp[i] 可以是使用金额i 的最小张数
 dp[i] = Math.min(dp[i-1], dp[i-2], dp[i-5]) + 1

 心得
1 只要找到dp[i] 和前面的dp的关系就ok，不用必须是dp[i] 和dp[i+1] 的关系


