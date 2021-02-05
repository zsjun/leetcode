/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// Runtime: 96 ms, faster than 88.11% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
// Memory Usage: 48.6 MB, less than 70.92% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
const lowestCommonAncestor = (root, p, q) => {
  if (!root) return null;
  if (p > q) {
    const temp = p;
    p = q;
    q = temp;
  }
  if (root.val === p.val || root.val === q.val) {
    return root;
  }

  if (root.val < p.val) {
    if (root && root.left) {
      return lowestCommonAncestor(root.left, p, q);
    } else {
      return null;
    }
  } else if (root.val > q.val) {
    if (root && root.right) {
      return lowestCommonAncestor(root.right, p, q);
    } else {
      return;
    }
  } else {
    return root;
  }
};
export default lowestCommonAncestor;
