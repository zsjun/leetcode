85. Maximal Rectangle

Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

Example 1:

Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 6
Explanation: The maximal rectangle is shown in the above picture.

Example 2:

Input: matrix = []
Output: 0

Example 3:

Input: matrix = [["0"]]
Output: 0

Example 4:

Input: matrix = [["1"]]
Output: 1

Example 5:

Input: matrix = [["0","0"]]
Output: 0

Constraints:

    rows == matrix.length
    cols == matrix.length
    0 <= row, cols <= 200
    matrix[i][j] is '0' or '1'.

思考
1 首先一行一行的计算，计算出每行其中的数字为 1 的矩形，left[i][j]表示 i，j 位置为 1 的时候，矩形的最左边的起始位置，
right[i][j]表示 i，j 位置为 1 的时候，矩形的最右边的结束位置，height[i][j]表示这个矩形的高度。

比如 matrix
0 0 0 1 1 0 0
0 0 1 1 1 0 0
0 1 1 1 1 1 0

1
第一行计算，
height 0 0 0 1 1 0 0 这个很明显，当只有一行的时候，组成的矩形的高度肯定等于每个元素
left 0 0 0 3 3 0 0 这里如果只有一行，那如果组成矩形，最左边开始的位置肯定就是第一个等于 1 的位置，而后面的，比如
matrix[0][4] 肯定是继续向前面寻找，知道找到连续的第一个等于 1 的元素，也就是 matrix[0][3]，所以如果 matrix[0][4]组成的矩形，肯定最左边是 matrix[0][3]
right 7 7 7 5 5 7 7 右边从右边开始寻找，如果等于 0，那肯定不能组成矩形的右边，则让它等于每行的长度，直到发现等于 1 的时候，则等于当前的 index+1，因为是计算矩形面积，（right-left）\* height

第二行计算
height 0 0 1 2 2 0 0 高度很好计算，就是每一行的 1 的高度
left 0 0 1 2 2 0 0 这里也很好理解，比如 matirx[1][3]的时候，如果只有一行，则 left[3] 等于 1，但是因为是要组成一个矩形，就得考虑上一行的，因为上一行是 3，所以如果包含 matirx[1][3]的矩形，开始位置得是 3，这里可以得出 left 的递推公式
left[i][j] = Math.max(left[i-1][j], cur_left) cur_left 就是当前这一行，如果包含 left[i][j]的开始位置
right 7 7 5 5 5 7 7 这里 right 从右边开始计算，如果等于 0，则让它等于这一行的宽度，如果等于 1，则找到最右边连续是 1 的位置，比如 matrix[1][2] 等于 min(right[0][2], 5) 5 等于这一行包含 matrix[1][2]连续是 1 的最右边的位置，
所以 matrix[i][j] 等于 min(right[i-1][j], cur_right) cur_right 等于这一行包含 matrix[i][j]连续是 1 的最右边的位置
