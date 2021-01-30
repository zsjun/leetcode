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
// Runtime: 80 ms, faster than 57.41% of JavaScript online submissions for Binary Tree Preorder Traversal.
// Memory Usage: 38.8 MB, less than 41.85% of JavaScript online submissions for Binary Tree Preorder Traversal.
export default (root) => {
  let res = [];
  let stack = [];
  if (root) {
    stack.push({
      node: root,
      hasVisitedLeft: false,
      hasVisitedRight: false,
    });
  } else {
    return res;
  }

  while (stack.length > 0) {
    const temp = stack[stack.length - 1];
    if (!temp.hasVisitedLeft) {
      res.push(temp.node.val);
    }

    if (temp.node.left && !temp.hasVisitedLeft) {
      temp.hasVisitedLeft = true;
      stack.push({
        node: temp.node.left,
        hasVisitedLeft: false,
        hasVisitedRight: false,
      });
    } else if (temp.node.right && temp.hasVisitedLeft && !temp.hasVisitedRight) {
      temp.hasVisitedRight = true;
      stack.push({
        node: temp.node.right,
        hasVisitedLeft: false,
        hasVisitedRight: false,
      });
    } else if (!temp.node.left && !temp.hasVisitedLeft) {
      temp.hasVisitedLeft = true;
    } else if (!temp.node.right && !temp.hasVisitedRight) {
      temp.hasVisitedRight = true;
    } else {
      stack.pop();
    }
  }
  return res;
};
