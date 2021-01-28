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
 * @param {number} sum
 * @return {number}
 */
const equalSum = (root, sum) => {
  let res = 0;
  if (root && root.val === sum) {
    res += 1;
  }

  if (root && root.left) {
    res += equalSum(root.left, sum - root.val);
  }
  if (root && root.right) {
    res += equalSum(root.right, sum - root.val);
  }
  return res;
};
var pathSum = function (root, sum) {
  const stack = [];
  if (root) {
    stack.push(root);
  }
  let res = 0;
  while (stack.length > 0) {
    const temp = stack.pop();

    res += equalSum(temp, sum);

    if (temp.right) {
      stack.push(temp.right);
    }
    if (temp.left) {
      stack.push(temp.left);
    }
  }
  return res;
};
export default pathSum;
