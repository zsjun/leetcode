class TreeNode {
  constructor(val, count) {
    // 代表二叉排序树中在val的左子树的个数
    this.count = count || 0;
    this.left = null;
    this.right = null;
    this.val = val;
  }
}
function buildTree(root, val, lessRootNodeVal, res) {
  if (root && val > root.val) {
    lessRootNodeVal += root.count + 1;
    if (root.right) {
      buildTree(root.right, val, lessRootNodeVal, res);
    } else {
      root.right = new TreeNode(val, 0);
      res.push(lessRootNodeVal);
    }
  } else if (root && val <= root.val) {
    root.count++;
    if (root.left) {
      buildTree(root.left, val, lessRootNodeVal, res);
    } else {
      root.left = new TreeNode(val, 0);
      res.push(lessRootNodeVal);
    }
  }
}
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// [1,6,2,5]
export default (nums) => {
  if (!nums) return [];
  if (nums.length === 0) return [];
  if (nums.length === 1) return [0];
  let res = [0];
  nums.reverse();
  const rootNode = new TreeNode(nums[0], 0);
  for (let i = 1; i < nums.length; i++) {
    buildTree(rootNode, nums[i], 0, res);
  }

  return res.reverse();
};
