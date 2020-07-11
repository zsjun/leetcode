162. Find Peak Element

A peak element is an element that is greater than its neighbors.

Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.

The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

You may imagine that nums[-1] = nums[n] = -∞.

Example 1:

Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
Example 2:

Input: nums = [1,2,1,3,5,6,4]
Output: 1 or 5
Explanation: Your function can return either index number 1 where the peak element is 2,
             or index number 5 where the peak element is 6.

Follow up: Your solution should be in logarithmic complexity.
思考路程
1, 第一眼就可以明显的看出，可以直接遍历一遍，只要找到一个峰值，就可以直接返回它的index了，可是题目要求是logn，则必须想别的办法。
2，logn肯定得折半查找，可是怎么折半呢？
刚开始想用空间换时间，可是没有想出来到底该怎么做。
后来想到用跳表，这样来减少需要查找的数目，可是也没想出来到底怎么做。

3，看了题解决，才明白原来可以转化为查找到数组中的最大数目，才发现自己犯了一个错误，想要找出所有的，但是实际上只要在任何一半之内有峰值就可以了。所以可以折半，然后判断两个相邻的，如果大于，
这里还有一个细节就是You may imagine that nums[-1] = nums[n] = -∞.
自己也没有好好注意，还是得把问题搞清楚，然后才能想解决办法




