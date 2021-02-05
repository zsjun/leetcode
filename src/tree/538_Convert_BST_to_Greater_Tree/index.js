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
 * @return {TreeNode}
 */
const convert = (cur, sum) => {
  if (!cur) return sum;
  sum = convert(cur.right, sum);
  cur.val += sum;
  sum = cur.val;
  sum = convert(cur.left, sum);
  return sum;
};
// Runtime: 104 ms, faster than 95.00% of JavaScript online submissions for Convert BST to Greater Tree.
// Memory Usage: 47.4 MB, less than 85.00% of JavaScript online submissions for Convert BST to Greater Tree.
export default (root) => {
  convert(root, 0);
  return root;
};
