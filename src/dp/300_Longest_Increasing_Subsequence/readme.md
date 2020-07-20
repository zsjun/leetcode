300. Longest Increasing Subsequence

Given an unsorted array of integers, find the length of longest increasing subsequence.

Example:

Input: [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
Note:

There may be more than one LIS combination, it is only necessary for you to return the length.
Your algorithm should run in O(n2) complexity.
Follow up: Could you improve it to O(n log n) time complexity?

思考路程
1 找到dp[i] 和dp[i+1]的关系
dp[i] 可以表示到数组arr[i]的最大升序
则dp[i+1] 就可以从Math.max(dp[i] && arr[i+1]>arr[i], dp[i-1] && arr[i+1]>arr[i-1]...) +1取到

时间复杂度O（n2) 空间复杂度O(n)
