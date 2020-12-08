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
 * @return {string[]}
 */
//     1
//   /   \
//  2     3
//   \
//    5
//  Output: ["1->2->5", "1->3"]
const dfs = (root, tempRes, res) => {
  tempRes.push(root.val);
  if (!root.left && !root.right) {
    res.push(tempRes.join("->"));
    return;
  }
  if (root.left) {
    dfs(root.left, [...tempRes], res);
  }
  if (root.right) {
    dfs(root.right, [...tempRes], res);
  }
};
// Runtime: 84 ms, faster than 72.61% of JavaScript online submissions for Binary Tree Paths.
// Memory Usage: 40.5 MB, less than 30.10% of JavaScript online submissions for Binary Tree Paths.
export default (root) => {
  if (!root) return [];
  const res = [];
  dfs(root, [], res);
  return res;
};
