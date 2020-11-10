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

export default (root) => {
  let res = [];
  let stack = [];
  let p = root;
  while (p || stack.length > 0) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    p = stack[stack.length - 1];
    stack.pop();
    res.push(p.val);
    p = p.right;
  }
  return res;
};
