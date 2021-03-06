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
//  Runtime: 100 ms, faster than 10.29% of JavaScript online submissions for Binary Tree Inorder Traversal.
//  Memory Usage: 38.4 MB, less than 93.23% of JavaScript online submissions for Binary Tree Inorder Traversal.
export default (root) => {
  if (!root) return [];
  const stack = [root];
  const res = [];
  let visited = false;
  while (stack.length > 0) {
    let pre = stack[stack.length - 1];
    while (pre && !visited) {
      pre = pre.left;
      if (pre) {
        stack.push(pre);
      }
    }
    const node = stack.pop();
    res.push(node.val);
    if (node.right) {
      stack.push(node.right);
      visited = false;
    } else {
      visited = true;
    }
  }
  return res;
};
