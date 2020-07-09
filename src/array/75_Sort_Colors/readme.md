75. Sort Colors

Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not suppose to use the library's sort function for this problem.

Example:

Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Follow up:

A rather straight forward solution is a two-pass algorithm using counting sort.
First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
Could you come up with a one-pass algorithm using only constant space?

思考路程
1 这个很简单，但是写起来很多细节需要考虑，思路大体上利用两个指针，从两边往中间走，如果发现 2，就移动到后边，发现 0 就移动到前面
2 遍历一遍，如果发现 2 则移动到后面，如果发现 0 则移动到前面，相比第一种方法，这种避免了很多无用的判断，简单粗暴
时间复杂度 O(n) 空间复杂度 O(1)
