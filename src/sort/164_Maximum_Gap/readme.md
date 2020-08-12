164. Maximum Gap

Given an unsorted array, find the maximum difference between the successive elements in its sorted form.

Return 0 if the array contains less than 2 elements.

Example 1:

Input: [3,6,9,1]
Output: 3
Explanation: The sorted form of the array is [1,3,6,9], either
(3,6) or (6,9) has the maximum difference 3.

Example 2:

Input: [10]
Output: 0
Explanation: The array contains less than 2 elements, therefore return 0.

Note:

    You may assume all elements in the array are non-negative integers and fit in the 32-bit signed integer range.
    Try to solve it in linear time/space

思考路程<br/>
1 如果不是 linear time/space , 应该很好做，先排序，然后再查找，算法时间复杂度是
O(nlgn）<br/>
2 如果要线性时间，我记得以前有个题目，是利用数组的下标来进行的。<br/>
3 题解<br/>
这里是用的类似桶排序的方法，桶排序有想到了，但是没有想到如何使用。<br/>
解法：

3.1 首先遍历一遍找到数组中最大和最下的值，max 和 min， 然后获得桶排序所必须的间隔值<br/>
let gap = Math.ceil((max - min) / (numsLen - 1));<br/>
这里为什么设置 gap 为这个值呢，因为从 min 到 max 走 n-1 步骤，每步加上 gap 刚好。<br/>
比如给出的数组是[3, 6, 9, 1], max = 9, min = 1;gap = 3;从 1 到 9 走 3 步，每步加 3，那就是 1， 4， 7， 10 刚好可以覆盖 1 到 9。<br/>
所以这里求的是最大的 maxgap 肯定不能小于 gap，因为如果每步加 gap，是刚刚好到达最大值，如果 maxgap 比刚刚好的 gap 的值还小，那么肯定是到达不了最大值的。<br/>
3.2 有了桶排序必须的 gap，然后就是建立 n-1 个桶，还是上面的[3, 6, 9, 1]，这里建立 3 个桶，每个桶的的范围分别是[1,4], [4,7], [7,10]。<br/>
3.3 最后就是遍历桶，计算桶里的最大的 maxgap，然后再把每个桶里最大的和隔壁最小的值获取 maxgap，一直循环比较就得到了最大的 maxgap。<br/>

算法时间复杂度 O(n), 空间复杂度 O(n)
