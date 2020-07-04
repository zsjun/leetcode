41. First Missing Positive
Hard

3430

785

Add to List

Share
Given an unsorted integer array, find the smallest missing positive integer.

Example 1:

Input: [1,2,0]
Output: 3
Example 2:

Input: [3,4,-1,1]
Output: 2
Example 3:

Input: [7,8,9,11,12]
Output: 1
Note:

Your algorithm should run in O(n) time and uses constant extra space.


思考路程
看到使用O(n)肯定就知道是遍历一遍或者是多遍,可是一直没有想出来如何确定数组中每个元素确定的最小没有出现的正整数如何判断它在前面没有出现.

1 第一种思路是想用两个指针向中间遍历，然后那边大，就移动大的一边，可是还是没有解决如何判断现在的正整数没有出现的问题。

2 第二种思路是想着从0开始遍历数组，找到最小的正整数之后，把该数组放到找到的正整数的位置，可是想着就感觉处理的情况太多，直接放弃。
如果一个算法，要处理的边界情况太多，基本就说明这个算法是错误的。

3 第三种思路看到题解，才明白，首先遍历一遍数组，现在不是先找最小正整数，而是根据数组元素的值来确定该数组元素的位置，比如现在数组元素的值是5，就把它放到数组中第四的位置，这样过一遍之后，然后再第二次遍历数组，如果发现当前的数组元素的值不是数组元素的下标 i+1， 则返回i+1,
否则返回n+1

这种妙在数组元素的下标天然可以和最小正整数对应起来。



















