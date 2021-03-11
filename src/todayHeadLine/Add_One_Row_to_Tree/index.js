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
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
export default (root, v, d) => {
  let before = [root];
  let depth = 1;
  if (d === 1) {
    const temp = root;
    root = new TreeNode(v);
    root.left = temp;
    return root;
  }
  while (depth < d - 1) {
    const temp = [];
    for (let i = 0; i < before.length; i++) {
      if (before[i] && before[i].left) {
        temp.push(before[i].left);
      }
      if (before[i] && before[i].right) {
        temp.push(before[i].right);
      }
    }
    before = temp;
    ++depth;
  }
  for (let i = 0; i < before.length; i++) {
    if (before[i]) {
      const temp = new TreeNode(v);
      const left = before[i].left;
      before[i].left = temp;
      temp.left = left;
    }
    if (before[i]) {
      const temp = new TreeNode(v);
      const right = before[i].right;
      before[i].right = temp;
      temp.right = right;
    }
  }
  return root;
};
