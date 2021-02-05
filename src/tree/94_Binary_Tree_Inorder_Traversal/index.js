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
  if (!root) return;
  const stack = [root];
  const res = [];

  while (stack.length) {
    const pre = stack[stack.length - 1];
    while (pre) {
      let pre = pre.left;
      stack.push(pre.left);
    }
    const node = stack.pop();
    res.push(node.val);
    if (node.right) {
      stack.push(node.right);
    } else {
      res.push(stack.pop().val);
    }
  }
  return res;
};
