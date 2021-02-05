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
  if (s.val === t.val) {
    return isEqual(s.left, t.left) && isEqual(s.right, t.right);
  }
};
// Runtime: 108 ms, faster than 60.11% of JavaScript online submissions for Subtree of Another Tree.
// Memory Usage: 46 MB, less than 5.88% of JavaScript online submissions for Subtree of Another Tree.
export default (s, t) => {
  let stack = [s];
  while (stack.length > 0) {
    const node = stack.pop();
    let flag = false;
    if (node && node.val === t.val) {
      flag = isEqual(node, t);
    }
    if (flag) {
      return true;
    } else {
      if (node && node.left) {
        stack.push(node.left);
      }
      if (node && node.right) {
        stack.push(node.right);
      }
    }
  }
  return false;
};
