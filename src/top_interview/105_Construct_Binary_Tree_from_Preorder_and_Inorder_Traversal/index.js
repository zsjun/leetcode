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

export default (preorder, inorder) => {
  const create = (p1, p2, i1, i2) => {
    if (p1 > p2 || i1 > i2) return null; // sanity check

    // 获得根元素
    const value = preorder[p1];
    // 获得中序的index
    const index = inorder.indexOf(value);
    // 获得左子树有多少节点
    const nLeft = index - i1;
    // 创建根元素
    const root = new TreeNode(value);

    // 递归
    root.left = create(p1 + 1, p1 + nLeft, i1, index - 1);
    root.right = create(p1 + nLeft + 1, p2, index + 1, i2);

    return root;
  };
  return create(0, preorder.length - 1, 0, inorder.length - 1);
};
