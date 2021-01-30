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
preorder = [3, 9, 20, 15, 7];
inorder = [9, 3, 15, 20, 7];
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
// Runtime: 4776 ms, faster than 5.07% of JavaScript online submissions for Construct Binary Tree from Preorder and Inorder Traversal.
// Memory Usage: 122.3 MB, less than 5.27% of JavaScript online submissions for Construct Binary Tree from Preorder and Inorder Traversal.
const buildTree = (preorder, inorder) => {
  if (preorder.length > 0) {
    const rootVal = preorder.shift();
    const inIndex = inorder.indexOf(rootVal);
    const leftInorder = inorder.slice(0, inIndex);
    const rightInorder = inorder.slice(inIndex);
    const root = new TreeNode(rootVal);

    const leftPreorder = [];
    const rightPreorder = [];
    for (let i = 0; i < preorder.length; i++) {
      if (leftInorder.includes(preorder[i]) && leftPreorder.length < leftInorder.length) {
        leftPreorder.push(preorder[i]);
      } else {
        rightPreorder.push(preorder[i]);
      }
    }
    root.left = buildTree(leftPreorder, leftInorder);
    root.right = buildTree(rightPreorder, rightInorder);
    return root;
  }
  return null;
};
export default buildTree;
