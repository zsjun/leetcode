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
const inorder = (root, res) => {
  if (!root) return res;
  inorder(root.left, res);
  res.push(root.val);
  inorder(root.right, res);
};
// Runtime: 100 ms, faster than 51.72% of JavaScript online submissions for Minimum Absolute Difference in BST.
// Memory Usage: 44.2 MB, less than 77.59% of JavaScript online submissions for Minimum Absolute Difference in BST.
export default (root) => {
  const res = [];
  inorder(root, res);
  let min = -1;
  for (let i = 1; i < res.length; i++) {
    if (min < 0) {
      min = res[i] - res[i - 1];
    } else {
      min = Math.min(res[i] - res[i - 1], min);
    }
  }
  return min;
};
