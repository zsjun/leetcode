/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// 这里最后是形成的树，而不是自己打印数组
function genTrees(start, end) {
  const list = [];

  if (start > end) {
    list.push(null);
    return list;
  }

  if (start === end) {
    list.push(new TreeNode(start));
    return list;
  }

  let left;
  let right;
  for (let i = start; i <= end; i++) {
    left = genTrees(start, i - 1);
    right = genTrees(i + 1, end);

    for (let lnode of left) {
      for (let rnode of right) {
        const root = new TreeNode(i);
        root.left = lnode;
        root.right = rnode;
        list.push(root);
      }
    }
  }
  return list;
}
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  return genTrees(1, n);
};
