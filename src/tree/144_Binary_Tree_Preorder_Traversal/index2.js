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
 * @return {number[]}
 */
// Runtime: 80 ms, faster than 57.41% of JavaScript online submissions for Binary Tree Preorder Traversal.
// Memory Usage: 38.8 MB, less than 41.85% of JavaScript online submissions for Binary Tree Preorder Traversal.
export default (root) => {
  let res = [];
  let stack = [];
  if (root) {
    stack.push(root);
  } else {
    return res;
  }

  while (stack.length > 0) {
    const temp = stack.pop();
    res.push(temp.val);
    if (temp.right) {
      stack.push(temp.right);
    }
    if (temp.left) {
      stack.push(temp.left);
    }
  }
  return res;
};
