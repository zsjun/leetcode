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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
const deleteVal = (root, is_root, to_delete, res) => {
  if (!root) return null;
  const deleted = to_delete.includes(root.val);
  if (is_root && !deleted) {
    res.push(root);
  }
  root.left = helper(root.left, deleted, to_delete, res);
  root.right = helper(root.right, deleted, to_delete, res);
  return deleted ? null : root;
};
// Runtime: 120 ms, faster than 32.97% of JavaScript online submissions for Delete Nodes And Return Forest.
// Memory Usage: 47.8 MB, less than 5.41% of JavaScript online submissions for Delete Nodes And Return Forest.
export default (root, to_delete) => {
  const res = [];
  helper(root, true, to_delete, res);
  return res;
};
