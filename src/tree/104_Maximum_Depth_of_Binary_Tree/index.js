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
const bfs = (root, count) => {
  if (!root) {
    return count;
  }
  let leftCount = count;
  let rightCount = count;
  if (root.left) {
    leftCount = bfs(root.left, count + 1);
  }
  if (root.right) {
    rightCount = bfs(root.right, count + 1);
  }
  return Math.max(leftCount, rightCount);
};
// Runtime: 104 ms, faster than 9.88% of JavaScript online submissions for Maximum Depth of Binary Tree.
// Memory Usage: 41.6 MB, less than 44.71% of JavaScript online submissions for Maximum Depth of Binary Tree.
export default (root) => {
  if (!root) {
    return 0;
  }
  return bfs(root, 1);
};
