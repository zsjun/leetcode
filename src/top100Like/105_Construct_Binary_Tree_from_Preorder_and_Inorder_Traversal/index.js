/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
const createNode = (preorder, inorder) => {
  if (preorder.length === 0) return null;
  const first = preorder.shift();
  const inorderIndex = inorder.indexOf(first);
  const leftInorder = inorder.slice(0, inorderIndex);
  const rightInorder = inorder.slice(inorderIndex + 1);
  const leftPreorder = preorder.slice(0, leftInorder.length);
  const rightPreorder = preorder.slice(leftInorder.length);
  const root = new TreeNode(first);
  root.left = createNode(leftPreorder, leftInorder);
  root.right = createNode(rightPreorder, rightInorder);
  return root;
};
export default (preorder, inorder) => {
  return createNode(preorder, inorder);
};
