124. Binary Tree Maximum Path Sum

Given a non-empty binary tree, find the maximum path sum.

For this problem, a path is defined as any node sequence from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

Example 1:

Input: root = [1,2,3]
Output: 6

Example 2:

Input: root = [-10,9,20,null,null,15,7]
Output: 42

Constraints:

    The number of nodes in the tree is in the range [0, 3 * 104].
    -1000 <= Node.val <= 1000

思考
1 递归采用从下而上模拟算法, 这题主要是不知道如何避免在节点的左子树或者右子树的节点被当做节点，或者换句话说如果一个节点作为根节点，那么它的左子树中的节点必须不能同时包括左子树和右子树，它的右子树的节点不能同时包括左子树和右子树
这里的方法是采用自底向上，要么返回 0，要么返回节点和它的左子树或者节点和它的右子树

算法时间复杂度 O（n），空间复杂度 O（1）
