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
const robSub = (root) => {
  if (!root) {
    return new Array(2).fill(0);
  }
  const left = robSub(root.left);
  const right = robSub(root.right);
  const res = new Array(2).fill(0);

  res[0] = root.val + left[1] + right[1];
  res[1] = Math.max(left[1], left[0]) + Math.max(right[1], right[0]);
  return res;
};
export default (root) => {
  // const arr = new Array(2).fill(0);
  // arr[0]抢了，arr[1]没抢
  const arr = robSub(root);
  return Math.max(arr[0], arr[1]);
};
