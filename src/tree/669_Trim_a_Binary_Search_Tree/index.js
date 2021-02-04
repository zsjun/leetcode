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
const inorder = (parent, root, low, high) => {
  if (root && root.val<low) {
      parent.left = null;
      parent.right=
  }
  inorder(root, root.left, low,high);
};

// const find = (root, low, high) => {

//   find(root.left, low, high);
//   if(root.val)

//   root.left = find(root.left, low, root.val);
//   root.right = find(root.right, root.val, high);
// };

export default (root, low, high) => {
  const res = [];
  const parent = new TreeNode();
  parent.left = root;
  inorder(parent, root, low, high);
};
