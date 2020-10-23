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
export default (root) => {
  function getMaxSum(node) {
    if (!node) return 0;
    let leftSum = getMaxSum(node.left);
    let rightSum = getMaxSum(node.right);
    // 从下而上找到最大的
    max = Math.max(max, node.val + leftSum + rightSum);
    // 采用从下而上，如果小于0，则最少返回0，然后返回该节点和左子树或者该节点和右子树的和
    return Math.max(leftSum + node.val, rightSum + node.val, 0);
  }
  let max = -Number.MAX_VALUE;
  getMaxSum(root);
  return max;
};
