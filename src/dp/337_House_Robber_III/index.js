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
const rob = (root, allSum = 0) => {
  if (!root) return 0;
  if (!root.left && !root.right) {
    return root.val + allSum;
  }
  let sum = allSum + root.val;
  let _sum = allSum;
  if (root.left && root.left.left) {
    sum = rob(root.left.left, sum);
  }
  if (root.left && root.left.right) {
    sum = rob(root.left.right, sum);
  }
  if (root.right && root.right.left) {
    sum = rob(root.right.left, sum);
  }
  if (root.right && root.right.right) {
    sum = rob(root.right.right, sum);
  }
  if (root.left) {
    _sum = rob(root.left, _sum);
  }
  if (root.right) {
    _sum = rob(root.right, _sum);
  }
  return Math.max(sum, _sum);
};

export default rob;
