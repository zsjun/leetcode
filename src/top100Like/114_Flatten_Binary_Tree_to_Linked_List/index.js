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
 * @return {void} Do not return anything, modify root in-place instead.
 */
const traveRoot = (root) => {
  if (!root) return null;
  if (!root.left && !root.right) return root;
  const rightTemp = root.right;
  const leftTemp = root.left;
  let last = null;
  let rightLast = null;
  if (leftTemp) {
    last = traveRoot(leftTemp);
    if (last === leftTemp) {
      root.right = last;
      root.left = null;
    } else {
      root.right = leftTemp;
      root.left = null;
    }
  }

  if (rightTemp) {
    rightLast = traveRoot(rightTemp);
  }
  if (last) {
    last.right = rightTemp;
  } else {
    root.right = rightTemp;
  }
  return rightLast ? rightLast : last ? last : leftTemp;
};
// Runtime: 80 ms, faster than 98.67% of JavaScript online submissions for Flatten Binary Tree to Linked List.
// Memory Usage: 40.7 MB, less than 46.85% of JavaScript online submissions for Flatten Binary Tree to Linked List.
export default (root) => {
  if (!root) return root;
  traveRoot(root);
  return root;
};
