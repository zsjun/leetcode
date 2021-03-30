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
 * @param {number[]} voyage
 * @return {number[]}
 */
export default (root, voyage) => {
  let res = [];
  let cur = 0;
  function dfs(tree) {
    if (tree.val === voyage[cur]) {
      cur++;
      if (tree.left && tree.left.val === voyage[cur]) {
        dfs(tree.left);
      }
      if (tree.right && tree.right.val === voyage[cur]) {
        dfs(tree.right);
        if (tree.left && tree.left.val === voyage[cur] && tree.left) {
          res.push(tree.val);
          dfs(tree.left);
        }
      }
    }
  }
  dfs(root);
  if (cur !== voyage.length) {
    return [-1];
  }
  return res;
};
