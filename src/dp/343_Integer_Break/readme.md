343. Integer Break

Given a positive integer n, break it into the sum of at least two positive integers and maximize the product of those integers. Return the maximum product you can get.

Example 1:

Input: 2
Output: 1
Explanation: 2 = 1 + 1, 1 × 1 = 1.

Example 2:

Input: 10
Output: 36
Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.

Note: You may assume that n is not less than 2 and not larger than 58.

1 很简单，这种一般利用 dp[i] 和 dp[i-1]的关系，这里 dp[i] 代表 i 的最大值，比如 dp[10] = 36,
而 dp[10] = Math.max(dp[8]*2, dp[9]*1, dp[7]*3, dp[6]*4, dp[5]*5, dp[4]*6,dp[3]*7, dp[2]*8, dp[1]\*9)
