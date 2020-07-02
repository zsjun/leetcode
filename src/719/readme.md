Given an integer array, return the k-th smallest distance among all the pairs. The distance of a pair (A, B) is defined as the absolute difference between A and B.

Example 1:
Input:
nums = [1,3,1]
k = 1
Output: 0
Explanation:
Here are all the pairs:
(1,3) -> 2
(1,1) -> 0
(3,1) -> 2
Then the 1st smallest distance pair is (1,1), and its distance is 0.
Note:
2 <= len(nums) <= 10000.
0 <= nums[i] < 1000000.
1 <= k <= len(nums) * (len(nums) - 1) / 2.

头脑风暴

1 首先想到使用暴力解法，先是全部遍历出来放到一个大小为k的数组，当有新的元素来临的时候，然后再插入,一直维持k的数组，但是这里有个问题就是当输入的数组少的时候还可以，但是如果数组变大，直接超时。后来想到既然超时，不如用空间换时间，不维持k的数组了，到最后一起排序，可是直接把内存爆了。
这个的空间复杂度O(k) 时间复杂度是O（kn²）
2