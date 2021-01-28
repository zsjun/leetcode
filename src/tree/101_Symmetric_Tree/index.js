/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric1 = (left, right) => {
  if (!left && !right) {
    return true;
  }
  if (!left || !right) {
    return false;
  }
  if (left.val != right.val) {
    return false;
  }
  return isSymmetric1(left.left, right.right) && isSymmetric1(left.right, right.left);
};
// Runtime: 92 ms, faster than 58.10% of JavaScript online submissions for Symmetric Tree.
// Memory Usage: 40.5 MB, less than 66.28% of JavaScript online submissions for Symmetric Tree.
export default (root) => {
  return root ? isSymmetric1(root.left, root.right) : true;
};
