1277. Count Square Submatrices with All Ones

Given a m \* n matrix of ones and zeros, return how many square submatrices have all ones.

Example 1:

Input: matrix =
[
[0,1,1,1],
[1,1,1,1],
[0,1,1,1]
]
Output: 15
Explanation:
There are 10 squares of side 1.
There are 4 squares of side 2.
There is 1 square of side 3.
Total number of squares = 10 + 4 + 1 = 15.

Example 2:

Input: matrix =
[
[1,0,1],
[1,1,0],
[1,1,0]
]
Output: 7
Explanation:
There are 6 squares of side 1.
There is 1 square of side 2.
Total number of squares = 6 + 1 = 7.

Constraints:

    1 <= arr.length <= 300
    1 <= arr[0].length <= 300
    0 <= arr[i][j] <= 1

思考
1 二维数组 matrix，如果用动态规划，肯定是 dp[i][j],然后就是找出状态转移方程.
2 dp[i][j] 表示以 matrix[i][j]右下结尾的构成的正方形的边长
比如
matrix dp
[0, 1, 1, 1] [0, 1, 1, 1]
[1, 1, 1, 1] => [1, 1, 2, 2]
[0, 1, 1, 1] [0, 1, 2, 3]

3 然后把 dp 每个值相加就可以了， 这里需要注意的比如 dp[2][3] = 3，不仅表示 dp[2][3] 此时可以组成一个长度为 3 的正方形，
同时也表示如果把 matrix[2][3]加入进来的时候，因为 dp[2][3]，此时有一个边长为 3 的正方形，所以此时肯定比没有加入 matrix[2][3]的时候，多一个一个长度为 3 的正方形，一个长度为 2 的正方形，一个长度为 1 的正方形，所以一共多了 3 个正方形，所以 dp[2][3]同时代表了如果把 matrix[2][3]加入的时候，多出来了几个正方形。

时间复杂度 O（mn）空间复杂度 O（1）
