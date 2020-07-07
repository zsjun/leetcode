128. Longest Consecutive Sequence

Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

Your algorithm should run in O(n) complexity.

Example:

Input: [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.


思考路程
1 利用空间换时间，用一个大数组，遍历数组，然后把每个数组，找到每个元素，然后把元素放到大数组中该元素的值减去1的位置，
然后再遍历该大数组，找到最大的连续子数组,但是这里还有0和负数的情况，不是很好处理。
2 利用数组排序，可是排序一般都是O(nlogn), 因为我们只需要找到最大连续数组的长度就可以了，肯定有许多浪费的时间，
3 想起了以前做过的题目，求数组的最大面积是根据每个数组元素来确定的，可以利用同样的思想，找到每个数组中比它大的和比它小的，就可以了。