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
const helper = (root) => {
  if (!root) {
    return 0;
  }
  let leftCount = 0;
  let rightCount = 0;
  if (root.left) {
    leftCount = helper(root.left);
  }
  if (root.right) {
    rightCount = helper(root.right);
  }
  if (leftCount === -1 || rightCount === -1 || Math.abs(leftCount - rightCount) > 1) {
    return -1;
  }
  return 1 + Math.max(leftCount, rightCount);
};

// Runtime: 148 ms, faster than 5.17% of JavaScript online submissions for Balanced Binary Tree.
// Memory Usage: 44.1 MB, less than 17.21% of JavaScript online submissions for Balanced Binary Tree.
export default (root) => {
  return helper(root) != -1;
};
