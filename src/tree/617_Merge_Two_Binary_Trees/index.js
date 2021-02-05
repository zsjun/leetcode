/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

// Runtime: 120 ms, faster than 48.51% of JavaScript online submissions for Merge Two Binary Trees.
// Memory Usage: 46.5 MB, less than 22.07% of JavaScript online submissions for Merge Two Binary Trees.
const merge = (left, right) => {
  if (!left) {
    return right;
  } else if (!right) {
    return left;
  } else {
    left.val += right.val;
    left.left = merge(left.left, right.left);
    left.right = merge(left.right, right.right);
    return left;
  }
};
export default (t1, t2) => {
  if (!t1) return t2;
  if (!t2) return t1;
  return merge(t1, t2);
};
