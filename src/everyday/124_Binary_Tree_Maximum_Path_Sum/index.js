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
const maxPathDown = (node, res) => {
  if (node === null) return 0;
  let left = Math.max(0, maxPathDown(node.left, res));
  let right = Math.max(0, maxPathDown(node.right, res));
  res[0] = Math.max(res[0], left + right + node.val);
  return Math.max(left, right) + node.val;
};
var maxPathSum = function (root) {
  let maxValue = -Number.MAX_VALUE;
  const res = [maxValue];
  maxPathDown(root, res);
  return res[0];
};
