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
export default (root) => {
  const levels = [];
  let stack = [root];
  let level = 0;
  while (stack.length) {
    levels.push([]);
    const newStack = [];
    while (stack.length) {
      const curr = stack.shift();
      levels[level].push(curr);
      if (curr.left) newStack.push(curr.left);
      if (curr.right) newStack.push(curr.right);
    }

    stack = newStack;
    level++;
  }
  return levels[levels.length - 1][0].val;
};
