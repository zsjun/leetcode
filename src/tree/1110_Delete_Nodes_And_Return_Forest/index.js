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
const deleteVal = (root, curentRoot, to_delete, res = []) => {
  if (!currentRoot) {
    return null;
  }
  const deleted = to_delete.includes(currentRoot.val);
  if (currentRoot === root) {
    res.push(root);
  }

  return cuurentRoot;
};
export default (root, to_delete) => {
  const res = [];
  helper(root, root, to_delete, res);
  return res;
};
