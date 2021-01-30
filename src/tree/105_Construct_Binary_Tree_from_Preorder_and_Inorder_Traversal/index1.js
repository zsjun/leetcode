/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
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
// Runtime: 96 ms, faster than 87.67% of JavaScript online submissions for Construct Binary Tree from Preorder and Inorder Traversal.
// Memory Usage: 41.7 MB, less than 93.64% of JavaScript online submissions for Construct Binary Tree from Preorder and Inorder Traversal.
const helper = (preStart, inStart, inEnd, preorder, inorder) => {
  if (preStart > preorder.length - 1 || inStart > inEnd) {
    return null;
  }
  const rootVal = preorder[preStart];
  const root = new TreeNode(rootVal);
  const index = inorder.indexOf(rootVal);
  // index - inStart + 1;
  root.left = helper(preStart + 1, inStart, index - 1, preorder, inorder);
  root.right = helper(preStart + index - inStart + 1, index + 1, inEnd, preorder, inorder);
  return root;
};
const buildTree = (preorder, inorder) => {
  return helper(0, 0, inorder.length - 1, preorder, inorder);
};
export default buildTree;
