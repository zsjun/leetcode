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
 * @return {number[]}
 */
//  Runtime: 80 ms, faster than 87.72% of JavaScript online submissions for Binary Tree Right Side View.
//  Memory Usage: 40.4 MB, less than 38.22% of JavaScript online submissions for Binary Tree Right Side View.
export default (root) => {
  const res = [];
  if (!root) return res;
  const level = [root];
  while (level.length > 0) {
    const len = level.length;

    for (let i = len - 1; i >= 0; i--) {
      if (level[i]) {
        res.push(level[i].val);
        break;
      }
    }
    for (let i = 0; i < len; i++) {
      const temp = level[0];
      level.shift();
      if (temp.left) {
        level.push(temp.left);
      }
      if (temp.right) {
        level.push(temp.right);
      }
    }
  }
  return res;
};
