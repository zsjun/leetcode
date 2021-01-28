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
 * @return {number}
 */
const getLength = (root) => {
  if (!root.left && !root.right) {
    return 1;
  }
  let left = 0;
  if (root && root.left) {
    left = 1 + getLength(root.left);
  }
  let right = 0;
  if (root && root.right) {
    right = 1 + getLength(root.right);
  }
  return Math.max(left, right, 1);
};

const diameterOfBinaryTree1 = (root) => {
  if (!root) {
    return 0;
  }
  let count = 1;
  if (root && root.left) {
    count += getLength(root.left);
  }
  if (root && root.right) {
    count += getLength(root.right);
  }
  return Math.max(count, diameterOfBinaryTree1(root.left), diameterOfBinaryTree1(root.right));
};
// Runtime: 248 ms, faster than 5.20% of JavaScript online submissions for Diameter of Binary Tree.
// Memory Usage: 41.9 MB, less than 59.36% of JavaScript online submissions for Diameter of Binary Tree.
export default (root) => {
  const res = diameterOfBinaryTree1(root);
  return res >= 1 ? res - 1 : 0;
};
