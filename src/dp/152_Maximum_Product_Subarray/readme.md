152. Maximum Product Subarray

Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

在一个数组中寻找连续乘积最大的子数组，最少包括一个元素

例子 1:

输入: [2,3,-2,4]
输出: 6
解释: [2,3] 最大是 6.

例子 2:

输入: [-2,0,-1]
输出: 0
解释: 结果不能是 2, 因为 [-2, -1] 不连续.

题解
1 dp[i] 表示数组 i 位置的最大连续乘积最大的数组，dp[i+1] 要么等于 dp[i],要么等于 nums[i]为结尾的连续乘积最大的数组

题目比较简单，时间复杂度 O（n^2），空间复杂度 O（n）
