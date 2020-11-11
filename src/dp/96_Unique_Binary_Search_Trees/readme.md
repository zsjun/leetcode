96. Unique Binary Search Trees

Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

Example:

Input: 3
Output: 5
Explanation:
Given n = 3, there are a total of 5 unique BST's:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3



Constraints:

    1 <= n <= 19

思考
1 涉及到树的都可以使用递归

算法时间复杂度 O(n*n) 空间复杂度O（n）
