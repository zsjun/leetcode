/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
const isEqual = (s, t) => {
  if (!s && !t) {
    return true;
  }
  if (s && !t) {
    return false;
  }
  if (!s && t) {
    return false;
  }
  if (s.val != t.val) return false;
  return isEqual(s.left, t.left) && isEqual(s.right, t.right);
};
// Runtime: 108 ms, faster than 60.11% of JavaScript online submissions for Subtree of Another Tree.
// Memory Usage: 46 MB, less than 5.88% of JavaScript online submissions for Subtree of Another Tree.
const isSubtree = (s, t) => {
  if (!s) return false;
  if (isEqual(s, t)) return true;

  return isSubtree(s.left, t) || isSubtree(s.right, t);
};

export default
