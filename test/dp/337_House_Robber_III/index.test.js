import rob from "../../../src/dp/337_House_Robber_III/index";

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
test("1", () => {
  let root = new TreeNode(3);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.right = new TreeNode(3);
  root.right.right = new TreeNode(1);
  expect(rob(root)).toBe(7);
});
