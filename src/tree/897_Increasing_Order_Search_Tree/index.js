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
 * @return {TreeNode}
 */
//  Runtime: 84 ms, faster than 38.73% of JavaScript online submissions for Increasing Order Search Tree.
//  Memory Usage: 39 MB, less than 69.47% of JavaScript online submissions for Increasing Order Search Tree.
export default (root) => {
  if (!root) return root;
  let cur = root;
  const stack = [];
  let rootNode;
  let curNode;
  while (cur || stack.length) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    const node = stack.pop();
    if (!rootNode) {
      rootNode = new TreeNode(node.va);
      curNode = rootNode;
    } else {
      curNode.left = null;
      curNode.right = new TreeNode(node.va);
      curNode = curNode.right;
    }
    cur = node.right;
  }
  return rootNode;
};
