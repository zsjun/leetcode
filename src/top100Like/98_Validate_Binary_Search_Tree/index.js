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
// 要首先思考完全再写代码，而不是先写代码再思考
export default (root) => {
  if (!root) return false;
  const res = [];
  const travelNodes = [root];
  let dir = "left";
  while (travelNodes.length > 0) {
    let node = travelNodes[travelNodes.length - 1];
    while (node && node.left && dir === "left") {
      node = node.left;
      travelNodes.push(node);
    }
    res.push(node.val);
    if (node && node.right) {
      travelNodes.pop();
      travelNodes.push(node.right);
      dir = "left";
    } else {
      dir = "right";
      travelNodes.pop();
    }
  }
  for (let i = 1; i < res.length; i++) {
    if (res[i] <= res[i - 1]) {
      return false;
    }
  }
  return true;
};
