# 91. Decode Ways

A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26

Given a non-empty string containing only digits, determine the total number of ways to decode it.

Example 1:

Input: "12"
Output: 2
Explanation: It could be decoded as "AB" (1 2) or "L" (12).

Example 2:

Input: "226"
Output: 3
Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

思考
1 很容易得出 dp[i] = dp[i-2] + dp[i-1], 也就是最后两位当做一个数的次数和最后一位当做一个数的次数，
然后 dp[1] = 1，dp[2] = 2 并且 str!== "10", 当 str==="10"的时候，应该 dp[2]=1
