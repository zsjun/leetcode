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
 * @return {boolean}
 */

const testValidNode = (root) => {
  if (!root) {
    return true;
  }
  let flag = true;
  if (root && root.left) {
    flag = flag && root.val > root.left.val;
  }
  if (root && root.right) {
    flag = flag && root.right.val > root.val;
  }
  return flag;
};
var isValidBST = function (root) {
  if (testValidNode(root)) {
    let flag = true;
    if (root && root.left) {
      flag = flag && isValidBST(root.left);
      let next = root.left;
      while (next.right) {
        next = next.right;
      }
      flag = flag && root.val > next.val;
    }
    if (root && root.right) {
      flag = flag && isValidBST(root.right);
      let next = root.right;
      while (next.left) {
        next = next.left;
      }
      flag = flag && root.val < next.val;
    }
    return flag;
  } else {
    return false;
  }
};

export default isValidBST;
