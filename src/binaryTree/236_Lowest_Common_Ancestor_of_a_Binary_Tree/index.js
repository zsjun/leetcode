/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const include = (root, p) => {
  if (root === p) {
    return true;
  } else {
    if (root && root.left && root.right) {
      return include(root.left, p) || include(root.right, p);
    } else if (root.left && !root.right) {
      return include(root.left, p);
    } else if (root.right && !root.left) {
      return include(root.right, p);
    } else {
      return false;
    }
  }
};
const lowestCommonAncestor = (root, p, q) => {
  if (root) {
    if (
      root.left &&
      root.right &&
      include(root.left, p) &&
      include(root.right, q) &&
      root !== p &&
      root !== q
    ) {
      return root;
    } else if (
      root.left &&
      root.right &&
      include(root.left, q) &&
      include(root.right, p) &&
      root !== p &&
      root !== q
    ) {
      return root;
    } else if (
      (root.left &&
        !include(root.left, p) &&
        !include(root.left, q) &&
        root !== p &&
        root !== q) ||
      (!root.left && root !== p && root !== q)
    ) {
      return lowestCommonAncestor(root.right, p, q);
    } else if (
      (root.right &&
        !include(root.right, p) &&
        !include(root.right, q) &&
        root !== p &&
        root !== q) ||
      (!root.right && root !== p && root !== q)
    ) {
      return lowestCommonAncestor(root.left, p, q);
    } else if (
      root === p &&
      ((root.left && include(root.left, q)) ||
        (root.right && include(root.right, q)))
    ) {
      return root;
    } else if (
      root === q &&
      ((root.left && include(root.left, p)) ||
        (root.right && include(root.right, p)))
    ) {
      return root;
    }
  }
};

export default lowestCommonAncestor;
