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
 * @return {number}
 */
const getLeftLeaves = (root, dir) => {
  if (!root) {
    return 0;
  }
  let sum = 0;
  if (root && !root.left && !root.right && dir === "left") {
    return root.val;
  } else {
    if (root && root.left) {
      sum += getLeftLeaves(root.left, "left");
    }
    if (root && root.right) {
      sum += getLeftLeaves(root.right, "right");
    }
  }
  return sum;
};
// Runtime: 76 ms, faster than 97.22% of JavaScript online submissions for Sum of Left Leaves.
// Memory Usage: 39.9 MB, less than 88.86% of JavaScript online submissions for Sum of Left Leaves.
const sumOfLeftLeaves = (root) => {
  if (!root) return 0;
  if (root && !root.left && !root.right) return 0;
  return getLeftLeaves(root, "left");
};
export default sumOfLeftLeaves;
