// Runtime: 96 ms, faster than 69.97% of JavaScript online submissions for Trim a Binary Search Tree.
// Memory Usage: 44.5 MB, less than 44.36% of JavaScript online submissions for Trim a Binary Search Tree.
const trimBST = (root, low, high) => {
  if (!root) return null;

  if (root.val < low) return trimBST(root.right, low, high);
  if (root.val > high) return trimBST(root.left, low, high);
  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);

  return root;
};
export default trimBST;
