149. Max Points on a Line

Given n points on a 2D plane, find the maximum number of points that lie on the same straight line.

Example 1:

Input: [[1,1],[2,2],[3,3]]
Output: 3
Explanation:
^
|
| o
| o
| o
+------------->
0 1 2 3 4

Example 2:

Input: [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
Output: 4
Explanation:
^
|
| o
| o o
| o
| o o
+------------------->
0 1 2 3 4 5 6

NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

思考地图
1 因为最近一直在 dp 的问题，首先想到了是 dp，有点类似最大回文字符串的问题，
可以定义 dp[i] 表示到 i 的最大的在一条直线上的公式（因为在二维上面在一条直线就是用二元一次公式，比如 y=x）
那么 dp[i+1] 要么也在这个公式上面，则最大的在一条直线上的 max 加 1，如果不在，则根据自己本身和前面的元素查找出一个公式，找到最大，两者对比是否比 max 大
