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
// [1, null, 2, 3];
export default (root) => {
  if (!root) return [];
  const stack = [];
  const res = [];
  let cur = root;
  while (stack.length || cur) {
    if (cur) {
      stack.push(cur);
      res.unshift(cur.val);
      cur = cur.right;
    } else {
      const node = stack.pop();
      cur = node.left;
    }
  }
  return res;
};
