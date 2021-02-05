/**
 * Definition for a binary tree node.

 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

const invert1 = (root, leftRoot, rightRoot) => {
  if (!root) {
    return;
  }
  root.right = leftRoot;
  root.left = rightRoot;
  if (rightRoot) {
    invert1(rightRoot, rightRoot.left, rightRoot.right);
  }
  if (leftRoot) {
    invert1(leftRoot, leftRoot.left, leftRoot.right);
  }
};
// Runtime: 80 ms, faster than 62.85% of JavaScript online submissions for Invert Binary Tree.
// Memory Usage: 39.2 MB, less than 8.63% of JavaScript online submissions for Invert Binary Tree.
export default (root) => {
  if (!root) return null;
  invert1(root, root.left, root.right);
  return root;
};
