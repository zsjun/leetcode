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
 * @param {number} key
 * @return {TreeNode}
 */
const findMin = (root) => {
  while (root.left) {
    root = root.left;
  }
  return root;
};
// Runtime: 112 ms, faster than 75.00% of JavaScript online submissions for Delete Node in a BST.
// Memory Usage: 47.2 MB, less than 65.49% of JavaScript online submissions for Delete Node in a BST.
const deleteNode = (root, key) => {
  if (!root) return root;
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    // 只有一个右节点
    if (!root.left) {
      return root.right;
      // 只有一个左节点
    } else if (!root.right) {
      return root.left;
    }
    // 同时有两个节点
    const minNode = findMin(root.right);
    root.val = minNode.val;
    root.right = deleteNode(root.right, root.val);
  }
  return root;
};

export default deleteNode;
