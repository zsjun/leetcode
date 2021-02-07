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
// Runtime: 92 ms, faster than 91.34% of JavaScript online submissions for Lowest Common Ancestor of a Binary Tree.
// Memory Usage: 48.2 MB, less than 27.33% of JavaScript online submissions for Lowest Common Ancestor of a Binary Tree.
export default (root, p, q) => {
  if (!root || root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  // 如果p或者q存在于left
  if (left) {
    // 如果p或者q存在于right
    if (right) {
      // 此时最近的肯定是root
      return root;
    } else {
      // 如果不存在于右边，那说明p或者q都存在于left
      return left;
    }
  } else {
    // 如果right存在，说明p和q都存在于right
    if (right) {
      return right;
    } else {
      // 如果不存在于左子树也不存在右子树
      return null;
    }
  }
};
