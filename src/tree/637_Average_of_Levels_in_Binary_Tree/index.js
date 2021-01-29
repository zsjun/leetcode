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
const getAvg = (stack, res) => {
  if (stack.length === 0) {
    return;
  }
  const stack1 = [];
  let sum = 0;
  for (let i = 0; i < stack.length; i++) {
    sum += stack[i].val;
    if (stack[i].left) {
      stack1.push(stack[i].left);
    }
    if (stack[i].right) {
      stack1.push(stack[i].right);
    }
  }

  res.push(sum / stack.length);
  getAvg(stack1, res);
};
var averageOfLevels = function (root) {
  const res = [];
  const stack = [];
  if (root) {
    stack.push(root);
  }
  getAvg(stack, res);
  return res;
};
