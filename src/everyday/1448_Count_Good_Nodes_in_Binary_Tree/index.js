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
// Runtime: 140 ms, faster than 98.68% of JavaScript online submissions for Count Good Nodes in Binary Tree.
// Memory Usage: 59 MB, less than 97.37% of JavaScript online submissions for Count Good Nodes in Binary Tree.
const getRes = (root, max, res) => {
  if (!root) return;
  if (max > root.val) {
    getRes(root.left, max, res);
    getRes(root.right, max, res);
  } else {
    res[0]++;
    getRes(root.left, root.val, res);
    getRes(root.right, root.val, res);
  }
};
var goodNodes = function (root) {
  if (!root) return 0;
  let res = [1];
  let max = root.val;
  getRes(root.left, max, res);
  // console.log(res);
  getRes(root.right, max, res);
  // console.log(res);
  return res[0];
};
