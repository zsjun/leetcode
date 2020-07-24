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
 * @return {number[][]}
 */
function findLeaf(root, sum, pathArr, res) {
  if (root && sum - root.val === 0 && !root.left && !root.right) {
    const arr = [...pathArr];
    arr.push(root.val);
    res.push(arr);
  } else if (root && root.left && !root.right) {
    let arr = [...pathArr];
    arr.push(root.val);
    findLeaf(root.left, sum - root.val, arr, res);
  } else if (root && root.right && !root.left) {
    let arr = [...pathArr];
    arr.push(root.val);
    findLeaf(root.right, sum - root.val, arr, res);
  } else if (root && root.right && root.left) {
    let arr = [...pathArr];
    let arr1 = [...pathArr];
    arr.push(root.val);
    arr1.push(root.val);
    findLeaf(root.left, sum - root.val, arr, res);
    findLeaf(root.right, sum - root.val, arr1, res);
  } else {
    return;
  }
}
export default (root, sum) => {
  let res = [];
  findLeaf(root, sum, [], res);
  return res;
};
