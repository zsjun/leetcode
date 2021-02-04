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
// Runtime: 396 ms, faster than 5.73% of JavaScript online submissions for Recover Binary Search Tree.
// Memory Usage: 53.3 MB, less than 6.37% of JavaScript online submissions for Recover Binary Search Tree.
export default (root) => {
  if (!root) {
    return;
  }
  // 错误的节点
  const errorNodes = [];
  let current = root;
  let preNode;
  // 当前遍历到节点的前一个节点
  let preCurrentNode;
  let first;
  let second;

  while (current) {
    if (!current.left) {
      if (preCurrentNode && preCurrentNode.val > current.val) {
        if (!first) {
          first = preCurrentNode;
        }
        second = current;
      }
      preCurrentNode = current;
      current = current.right;
    } else {
      preNode = current.left;
      while (preNode.right && preNode.right.val !== current.val) {
        preNode = preNode.right;
      }
      if (!preNode.right) {
        preNode.right = current;
        current = current.left;
      } else {
        if (preCurrentNode && preCurrentNode.val > current.val) {
          if (!first) {
            first = preCurrentNode;
          }
          second = current;
        }
        preNode.right = null;
        preCurrentNode = current;
        current = current.right;
      }
    }
  }

  // 交换
  const temp = first.val;
  first.val = second.val;
  second.val = temp;
};
