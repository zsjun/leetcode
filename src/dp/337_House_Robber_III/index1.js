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
const rob1 = (root) => {
  if (root === null) return 0;
  let sum = 0;
  if (root.left) {
    sum += rob1(root.left.left) + rob1(root.left.right);
  }
  if (root.right) {
    sum += rob1(root.right.left) + rob1(root.right.right);
  }

  return Math.max(sum + root.val, rob1(root.left) + rob1(root.right));
};

export default rob;
