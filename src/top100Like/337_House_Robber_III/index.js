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
// 超时
const rob1 = (root) => {
  if (!root) return 0;
  let leftSum = 0;
  let rightSum = 0;
  if (root.left) {
    rightSum += rob1(root.left);
    if (root.left.left) {
      leftSum += rob1(root.left.left);
    }
    if (root.left.right) {
      leftSum += rob1(root.left.right);
    }
  }
  if (root.right) {
    rightSum += rob1(root.right);
    if (root.right.left) {
      leftSum += rob1(root.right.left);
    }
    if (root.right.right) {
      leftSum += rob1(root.right.right);
    }
  }
  return Math.max(root.val + leftSum, rightSum);
};
export default (root) => {
  return rob1(root);
};
