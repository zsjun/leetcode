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
  // first和second是需要被交换的两个值
  var prev, first, second;

  function inorder(root) {
    if (!root) return;

    inorder(root.left);

    if (prev && prev.val > root.val) {
      // 发现一个错误, 只更新一次
      if (!first) {
        first = prev;
      }
      // 一直更新第二个
      second = root;
    }
    prev = root;

    inorder(root.right);
  }

  inorder(root);

  // 交换
  const temp = first.val;
  first.val = second.val;
  second.val = temp;
};
