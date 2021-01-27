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
const balance = (root) => {
  if (!root) {
    return true;
  }
  let leftCount = 1;
  let rightCount = 1;
  if (root.left) {
    leftCount = bfs(root.left, 2);
  }
  if (root.right) {
    rightCount = bfs(root.right, 2);
  }
  return Math.abs(leftCount - rightCount) <= 1;
};
// Runtime: 148 ms, faster than 5.17% of JavaScript online submissions for Balanced Binary Tree.
// Memory Usage: 44.1 MB, less than 17.21% of JavaScript online submissions for Balanced Binary Tree.
export default (root) => {
  const stack = [root];
  while (stack.length > 0) {
    const root = stack.pop();
    if (!balance(root)) {
      return false;
    } else {
      if (root && root.left) {
        stack.push(root.left);
      }
      if (root && root.right) {
        stack.push(root.right);
      }
    }
  }

  return true;
};
