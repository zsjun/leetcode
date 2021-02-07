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
  const stack = [];
  const res = [];
  let cur = root;
  while (cur || stack.length > 0) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    res.push(cur.val);
    cur = cur.right;
  }
  return res;
};
