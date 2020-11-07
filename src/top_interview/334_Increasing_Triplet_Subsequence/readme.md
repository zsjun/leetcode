334. Increasing Triplet Subsequence

Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

Formally the function should:

    Return true if there exists i, j, k
    such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.

Note: Your algorithm should run in O(n) time complexity and O(1) space complexity.

Example 1:

Input: [1,2,3,4,5]
Output: true

Example 2:

Input: [5,4,3,2,1]
Output: false

思考地图

1 首先想到了利用暴力法，然后看下如何减少空间复杂度，结果是无法减少到O（n）
2 如果想要达到O（n），就是要遍历一次，可是如何遍历呢？因为是要寻找三个数，让这三个数形成升序。
可以设置两个指针，一个small指针，一个big指针，small一直小于big，如果发现比big大的数，就算是找到了。
然后剩下的问题就是如何更新small指针和big指针，这里也是这个解法最精妙的地方，如果发现比small小的就更新为新的small，
如果发现比small大且小于big的就更新big，那么为什么不是大于big呢？因为只有big更小的时候，才更容易发现比big大的数。



