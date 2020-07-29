407. Trapping Rain Water II

Given an m x n matrix of positive integers representing the height of each unit cell in a 2D elevation map, compute the volume of water it is able to trap after raining.

Example:

Given the following 3x6 height map:
[
  [1,4,3,1,3,2],
  [3,2,1,3,2,4],
  [2,3,3,2,3,1]
]

Return 4.
The above image represents the elevation map [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]] before the rain.

After the rain, water is trapped between the blocks. The total volume of water trapped is 4.


Constraints:

1 <= m, n <= 110
0 <= heightMap[i][j] <= 20000

思考路程<br>
1 刚开想着一行一列进行计算，发现根本解决不了
2 后来看了题解，才明白可以使用水漫金山来进行计算，一层层的来进行搜索。