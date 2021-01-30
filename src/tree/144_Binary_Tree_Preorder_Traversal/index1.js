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
 * @return {number[]}
 */
// Runtime: 80 ms, faster than 57.41% of JavaScript online submissions for Binary Tree Preorder Traversal.
// Memory Usage: 38.9 MB, less than 11.26% of JavaScript online submissions for Binary Tree Preorder Traversal.
const travel = (root, res) => {
  if (!root) {
    return;
  }

  res.push(root.val);
  travel(root.left, res);
  travel(root.right, res);
};
export default (root) => {
  const res = [];
  travel(root, res);
  return res;
};
