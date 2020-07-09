287. Find the Duplicate Number

Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

Example 1:

Input: [1,3,4,2,2]
Output: 2
Example 2:

Input: [3,1,3,4,2]
Output: 3
Note:

You must not modify the array (assume the array is read only).
You must use only constant, O(1) extra space.
Your runtime complexity should be less than O(n2).
There is only one duplicate number in the array, but it could be repeated more than once.

思考路程
1 先排序，然后遍历就可以了,但是数组是只读的，这样明显不可行
2 可以直接使用暴力方法，通过两层遍历来解决
算法复杂度 O(n2) 空间复杂度 O（1）
3 采用龟兔赛跑算法
算法复杂度 O（n）空间复杂度 0（1）
