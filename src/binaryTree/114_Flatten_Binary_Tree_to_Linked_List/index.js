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
const flatten1 = (root, arr) => {
  if (root) {
    arr.push(root);
  }

  if (root && root.left) {
    flatten1(root.left, arr);
  }

  if (root && root.right) {
    flatten1(root.right, arr);
  }
};
export default (root) => {
  if (!root) return root;
  let arr = [];
  flatten1(root, arr);
  for (let i = 0; i < arr.length; i++) {
    arr[i].left = null;
    if (i === arr.length - 1) {
      arr[i].right = null;
    } else {
      arr[i].right = arr[i + 1];
    }
  }
};
