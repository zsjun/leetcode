/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
const inorder = (parent, root, low, high, dir) => {
  if (root && root.val < low) {
    if (dir === "left") {
      parent.left = root.right;
      root.right = null;
      inorder(parent, parent.left, low, high, "left");
    } else {
      parent.right = root.right;
      root.right = null;
      inorder(parent, parent.right, low, high, "right");
    }
  } else if (root && root.val > high) {
    if (dir === "left") {
      parent.left = root.left;
      root.right = null;
      inorder(parent, parent.left, low, high, "left");
    } else {
      parent.right = root.left;
      root.right = null;
      inorder(parent, parent.right, low, high, "right");
    }
  } else {
    if (root && root.left) {
      inorder(root, root.left, low, high, "left");
    }
    if (root && root.right) {
      inorder(root, root.right, low, high, "right");
    }
  }
};

// Runtime: 116 ms, faster than 34.98% of JavaScript online submissions for Trim a Binary Search Tree.
// Memory Usage: 44 MB, less than 91.36% of JavaScript online submissions for Trim a Binary Search Tree.
export default (root, low, high) => {
  const parent = new TreeNode();
  parent.left = root;
  inorder(parent, root, low, high, "left");
  return parent.left;
};
