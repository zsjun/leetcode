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
const getDepth = (root, depth) => {
  if (!root) return depth;
  let max = depth;
  if (root && root.left) {
    max = Math.max(getDepth(root.left, depth + 1), max);
  }
  if (root && root.right) {
    max = Math.max(getDepth(root.right, depth + 1), max);
  }
  return max;
};
// Runtime: 84 ms, faster than 85.83% of JavaScript online submissions for Maximum Depth of Binary Tree.
// Memory Usage: 41.6 MB, less than 46.22% of JavaScript online submissions for Maximum Depth of Binary Tree.
export default (root) => {
  if (!root) return 0;
  return getDepth(root, 1);
};
