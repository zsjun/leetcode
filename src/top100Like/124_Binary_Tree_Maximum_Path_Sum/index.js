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
// Runtime: 96 ms, faster than 83.06% of JavaScript online submissions for Binary Tree Maximum Path Sum.
// Memory Usage: 48.2 MB, less than 76.53% of JavaScript online submissions for Binary Tree Maximum Path Sum.
export default (root) => {
  let maxValue = -Number.MAX_VALUE;
  const res = [maxValue];
  // 寻找以root为根节点，然后最大的和，要么是左边，要么是右边
  // 刚开始想左右，实际上可以分开两部分，一部分左边，一部分右边
  // 自己的思路是刚开始要合在一起，统一考虑

  maxPathDown(root, res);
  return res[0];
};
