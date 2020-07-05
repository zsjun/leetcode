Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
思考路程
1 刚开始想用先排序后暴力的解法，可是发现结果很多是重复的，后来想把重复的过滤掉，但是这样的话本来如果数组中有重复的元素，如果给去掉，这就有可能把正确的结果给去掉，比如是-1，-1，2
假设你把-1给去重了，那-1，-1，2 这个正确的结果也就没有了，这样最后的结果肯定也是不正确的

2 后来想先排序然后通过跳表，每次跳过去数组中相同的元素，但是还是会面临有重复数组的情况