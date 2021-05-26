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
 * @param {number} k
 * @return {number}
 */
const travel = (root, res) => {
  if (!root) return;
  if (root.left) {
    travel(root.left, res);
    res.push(root.val);
    if (root.right) {
      travel(root.right, res);
    }
  } else {
    res.push(root.val);
    if (root.right) {
      travel(root.right, res);
    }
  }
};
export default (root, k) => {
  const res = [];
  travel(root, res);
  return res[k - 1];
};
