33. Search in Rotated Sorted Array

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

思考路程<br/>
1 时间复杂度是logn肯定是二分搜索，只不过就是如何二分搜索？<br/>
可以先遍历一遍，找到分界点，这里的分界点就是在最小的数字前一个<br/>
这里本来想直接找分界点，发现不是很好找，很多测试用例过不去，后来一想，为什么不换一下，改成找最小的数字呢。


