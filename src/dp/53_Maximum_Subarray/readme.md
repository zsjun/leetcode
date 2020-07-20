53. Maximum Subarray

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.


思考路程

1 初始值 -2， 状态转移 找到以某个数结尾的最大子串，然后状态进行转移

算法复杂度0（n） 时间复杂度O(1)


心得
1 dp 最主要的是找到状态，也就是dp[i] 与dp[i+1] 之间的关系