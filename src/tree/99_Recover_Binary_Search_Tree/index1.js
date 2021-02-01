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
// Runtime: 220 ms, faster than 21.99% of JavaScript online submissions for Recover Binary Search Tree.
// Memory Usage: 48.6 MB, less than 77.31% of JavaScript online submissions for Recover Binary Search Tree.
export default (root) => {
  // 错误的节点
  const errorNodes = [];
  if (!root) {
    return;
  }
  let current = root;
  let preNode = null;
  let previous = null;
  while (current) {
    if (!current.left) {
      if (previous && previous.val > current.val) {
        errorNodes.push(previous);
        errorNodes.push(current);
      }
      previous = current;
      current = current.right;
    } else {
      preNode = current.left;
      while (preNode.right != null && preNode.right.val != current.val) {
        preNode = preNode.right;
      }

      if (preNode.right == null) {
        preNode.right = current;
        current = current.left;
      } else {
        if (previous != null && previous.val > current.val) {
          errorNodes.push(previous);
          errorNodes.push(current);
        }

        preNode.right = null;
        previous = current;
        current = current.right;
      }
    }
  }

  if (errorNodes.length == 2) {
    preNode = errorNodes[0];
    current = errorNodes[1];
  } else {
    //this case where errorNodes.size()==4
    pre = errorNodes[0];
    current = errorNodes[3];
  }

  const temp = preNode.val;
  preNode.val = current.val;
  current.val = temp;
};
