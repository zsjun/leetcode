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
const isSymmetric1 = (leftRoot, rightRoot) => {
  if (!leftRoot && !rightRoot) return true;
  if (leftRoot && !rightRoot) return false;
  if (!leftRoot && rightRoot) return false;
  if (
    (!leftRoot.left && rightRoot && rightRoot.right) ||
    (leftRoot && leftRoot.left && !rightRoot.right) ||
    (leftRoot.left && rightRoot.right && leftRoot.left.val !== rightRoot.right.val)
  ) {
    return false;
  } else {
    return isSymmetric1(leftRoot.left, rightRoot.right) && isSymmetric1(leftRoot.right, rightRoot.left);
  }
};
export default (root) => {
  if (!root) return false;
  return isSymmetric1(root, root);
};
