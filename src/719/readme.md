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
1 <= k <= len(nums) \* (len(nums) - 1) / 2.

思考历程

1 首先想到使用暴力解法，先是全部遍历出来放到一个大小为 k 的数组，当有新的元素来临的时候，然后再插入,一直维持 k 的数组，但是这里有个问题就是当输入的数组少的时候还可以，但是如果数组变大，直接超时。后来想到既然超时，不如用空间换时间，不维持 k 的数组了，到最后一起排序，可是直接把内存爆了。
这个的空间复杂度 O(k) 时间复杂度是 O（kn²）

问题
1 如何节省时间呢，肯定得 n² 获取到数据，或者少于 n²，用个 hash 节省点时间，可是获取 k 还是得要排序插入？

后来去看了题解，才发现原来可以通过最大范围，也就是先把数组排序，然后用数组中的最大减去最小来确定范围，很奇妙

然后就是采用二分方法来查找，不过这里比较绕的就是这段代码
for (let i = 0, j = 0; i < nums.length; i++) {
while (j < nums.length && nums[j] - nums[i] <= mid) j++;
count += j - i - 1;
}
这里其实就是通过两个指针指向数组，两个指针组合就是一个数组对，这里就是通过遍历找到所有的数组对距离小于等于 mid 的数目
